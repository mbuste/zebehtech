import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'birthdays', component: BirthdaysComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'potraits', component: PotraitsComponent },
  { path: 'parties', component: PartiesComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginformComponent },
  { path: 'file', canActivate: [AuthguardGuard], component: FileUploadComponent }
];

import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { BirthdaysComponent } from './components/birthdays/birthdays.component';
import { HomeComponent } from './components/home/home.component';
import { PhotosService } from './photos.service';
import { LifestyleComponent } from './components/lifestyle/lifestyle.component';
import { PotraitsComponent } from './components/potraits/potraits.component';
import { PartiesComponent } from './components/parties/parties.component';
import { WeddingsComponent } from './components/weddings/weddings.component';
import { AboutComponent } from './components/about/about.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AuthguardGuard } from './authguard.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BirthdaysComponent,
    LifestyleComponent,
    PotraitsComponent,
    PartiesComponent,
    WeddingsComponent,
    AboutComponent,
    FileUploadComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [PhotosService, CookieService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
