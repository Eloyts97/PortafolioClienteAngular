import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { auth, User } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public usuario: string;

  constructor(public afAuth: AngularFireAuth, public router: Router) {}

  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.usuario = JSON.stringify(result.user.displayName);
        console.log('Inicio de sesión completado', this.usuario);
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('Inicio de sesión completado');
        console.log(result.user);
        this.usuario = result.user.email;
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
         // this.router.navigate(['proyectos']);
         console.log(result);
         this.usuario = result.user.email;
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // SignOut method for logging out from the Angular/Firebase app
  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['signin']);
      console.log('Sesión cerrada');
    });
  }

}
