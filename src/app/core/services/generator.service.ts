import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class GeneratorService{
    private passSubject = new Subject<string>()

    public generatePassword(link: string, secret: string): void {
        const res = this.encrypt(link,secret);
        this.passSubject.next(res);
    }

    public passObservable(): Observable<string> {
        return this.passSubject.asObservable();
    }

    private encrypt(plaintext: string, password: string): string {
        let v = new Array(2), k = new Array(4), s = "";
        plaintext = encodeURIComponent(plaintext);
        for (let i=0; i<4; i++) k[i] = this.Str4ToLong(password.slice(i*4,(i+1)*4));
      
        for (let i=0; i<plaintext.length; i+=8) {
          v[0] = this.Str4ToLong(plaintext.slice(i,i+4));
          v[1] = this.Str4ToLong(plaintext.slice(i+4,i+8));
          this.code(v, k);
          s += this.LongToStr4(v[0]) + this.LongToStr4(v[1]);
        }
        console.log(this.stringToASCII(this.escCtrlCh(s)))
        return this.escCtrlCh(s);
    }

      private decrypt(ciphertext: string, password: string): string {
        let v = new Array(2), k = new Array(4), s = "";
      
        for (let i=0; i<4; i++) k[i] = this.Str4ToLong(password.slice(i*4,(i+1)*4));
      
        ciphertext = this.unescCtrlCh(ciphertext);
        for (let i=0; i<ciphertext.length; i+=8) { 
          v[0] = this.Str4ToLong(ciphertext.slice(i,i+4));
          v[1] = this.Str4ToLong(ciphertext.slice(i+4,i+8));
          this.decode(v, k);
          s += this.LongToStr4(v[0]) + this.LongToStr4(v[1]);
        }
        s =  s.replace(/\0+$/, '');
      
        return decodeURIComponent(s);
    }
      
      
      private code(v: number[], k: number[]) {
        let y = v[0], z = v[1];
        var delta = 0x9E3779B9, limit = delta*32, sum = 0;
        while (sum != limit) {
          y += (z<<4 ^ z>>>5)+z ^ sum+k[sum & 3];
          sum += delta;
          z += (y<<4 ^ y>>>5)+y ^ sum+k[sum>>>11 & 3];
        }
        v[0] = y; v[1] = z;
      }
      
      private decode(v: any[], k: any[]) {
        var y = v[0], z = v[1];
        var delta = 0x9E3779B9, sum = delta*32;
      
        while (sum != 0) {
          z -= (y<<4 ^ y>>>5)+y ^ sum+k[sum>>>11 & 3];
          sum -= delta;
          y -= (z<<4 ^ z>>>5)+z ^ sum+k[sum & 3];
        }
        v[0] = y; v[1] = z;
      }
      
      private Str4ToLong(s: string): number {
        let v = 0;
        for (let i=0; i<4; i++) v |= s.charCodeAt(i) << i*8;
        return isNaN(v) ? 0 : v;
      }
      
      private LongToStr4(v: any): string {
        const s = String.fromCharCode(v & 0xFF, v>>8 & 0xFF, v>>16 & 0xFF, v>>24 & 0xFF);
        return s;
      }
      
      private escCtrlCh(str: string): string {
        return str.replace(/[\0\t\n\v\f\r\xa0'"!]/g, (c: any) => '!' + c.charCodeAt(0) + '!');
      }
      
      private unescCtrlCh(str: string): string {
        return str.replace(/!\d\d?\d?!/g, (c:any) =>  String.fromCharCode(c.slice(1,-1)));
      }

      private stringToASCII(str:string): string {
        let res = '';
        str.split('').forEach(char => {
          res += ' ' + char.charCodeAt(0);
        });
        return res;
      }
}
