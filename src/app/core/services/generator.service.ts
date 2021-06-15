import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { OptionsService } from "./options.service";
declare const enc: any;

@Injectable({providedIn: 'root'})
export class GeneratorService{
    private passSubject = new Subject<string>();

    constructor(private options: OptionsService) {}

    public generatePassword(link: string, secret: string): void {
        const options = this.options.getOptions();
        const res = enc(link,secret,options);
        this.passSubject.next(res);
    }

    public passObservable(): Observable<string> {
        return this.passSubject.asObservable();
    }



}
