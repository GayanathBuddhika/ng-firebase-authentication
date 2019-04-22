import * as firebase from 'firebase'
export class AuthService{
    token: string;

singUpUser(email: string, password: string){

firebase.auth().createUserWithEmailAndPassword(email,password)
.catch(error => 
    console.log(error)
 ) }

 singinUser(email:string, password: string){
     firebase.auth().signInWithEmailAndPassword(email,password)
     .then(
         respons => firebase.auth().currentUser.getIdToken()
         .then((token : string) => this.token = token)
     ).catch(
         error => console.log(error)
     )
 }

 isAuthenticated(){
     return this.token != null;
 }

 logout(){
     firebase.auth().signOut();
     this.token =null; 
 }
}