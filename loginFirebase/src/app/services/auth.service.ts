import { Injectable } from '@angular/core';
import { Auth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut} from '@angular/fire/auth';

import { doc, docData, Firestore, setDoc, addDoc, collection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private firestore: Firestore) { }

  async register({ email, password }) {
    try {
      const user = await createUserWithEmailAndPassword(this.auth, email,password);
      return user;
    } catch (e) {
      return null;
    }
  }

  async registerData({name, lastname, info}){
    const user = this.auth.currentUser;
    const docRef = doc(this.firestore, `users/${user.uid}`);
    try{
      const res = setDoc(docRef, {name: name, lastname: lastname, info: info});
      return res;
    }catch{
      return null;
    }
  }

  async getData(){
    const user = this.auth.currentUser;
    const docRef = doc(this.firestore, `users/${user.uid}`);
    return docData(docRef, {idField: 'id'});
  }

  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (e) {
      return null;
    }
  }

  logout(){
    return signOut(this.auth);
  }
}
