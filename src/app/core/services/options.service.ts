import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IOptions } from "../interfaces/options.interface";

@Injectable({providedIn: 'root'})
export class OptionsService {
    private optionsSubject = new Subject<IOptions>();
    private optionsState: IOptions;

    public changeOptions(options: IOptions): void {
        this.optionsState = options;
        this.optionsSubject.next(options);
    }

    public getOptions(): IOptions {
        return this.optionsState;
    }
}