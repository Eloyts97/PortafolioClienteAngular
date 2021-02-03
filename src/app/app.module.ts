import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { SliderComponent } from './components/slider/slider.component';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { SigninComponent } from './components/signin/signin.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const firebaseConfig = {
  apiKey: "AIzaSyAg5iUU8Pt-6C_NhuAEGpb--f2oHthrGbQ",
  authDomain: "portfolio-1254f.firebaseapp.com",
  databaseURL: "https://portfolio-1254f.firebaseio.com",
  projectId: "portfolio-1254f",
  storageBucket: "portfolio-1254f.appspot.com",
  messagingSenderId: "232491844337",
  appId: "1:232491844337:web:91d1682f6fb11ec6b2df50",
  measurementId: "G-LLB74HT9FR"
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    SliderComponent,
    SigninComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    OwlModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
