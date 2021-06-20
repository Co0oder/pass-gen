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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { OptionsGroupComponent } from './core/components/options-group/options-group.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { OptionsService } from './core/services/options.service';
import { MatDialogModule } from '@angular/material/dialog';
import { InfoModalComponent } from './core/components/info-modal/info-modal.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    ResultInputComponent,
    SecretInputComponent,
    SiteInputComponent,
    OptionsGroupComponent,
    InfoModalComponent,
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
    MatSlideToggleModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    GeneratorService,
    OptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
