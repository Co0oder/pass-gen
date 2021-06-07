import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultInputComponent } from './core/components/result-input/result-input.component';
import { SecretInputComponent } from './core/components/secret-input/secret-input.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SiteInputComponent } from './core/components/site-input/site-input.component';
import { GeneratorService } from './core/services/generator.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    ResultInputComponent,
    SecretInputComponent,
    SiteInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ClipboardModule,
    MatCardModule,
    ToastrModule.forRoot()
  ],
  providers: [GeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
