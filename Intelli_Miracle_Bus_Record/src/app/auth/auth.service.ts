import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { AngularFireAuth } from 'angularfire2/auth'
import { HomeService } from '../home/home.service'

@Injectable()
export class AuthService{
    authChange = new Subject<boolean>();
    private isAuthenticated =false;

    constructor(private router: Router,private afAuth: AngularFireAuth,private homeService:HomeService){

    }
    initAuthListener() {
        this.afAuth.authState.subscribe(user => {
          if (user) {
            this.isAuthenticated = true;
            this.authChange.next(true);
            this.router.navigate(['/home']);
          } else {
            this.homeService.cancelSubscriptions();
            this.authChange.next(false);
            this.router.navigate(['/login']);
            this.isAuthenticated = false;
          }
        });
      }

    registerUser(authData:AuthData){
        this.afAuth.auth.createUserWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result => {
        })
        .catch(error => {
            console.log(error);
        });
    }

    login(authData: AuthData) {
        this.afAuth.auth
          .signInWithEmailAndPassword(authData.email, authData.password)
          .then(result => {
            console.log(result);
          })
          .catch(error => {
            console.log(error);
          });
      } 

    logout(){
        this.afAuth.auth.signOut();
    }

    isAuth(){
        return this.isAuthenticated;
    }

    refresh(){
        this.authChange.next(true);
        this.router.navigate(['']);
    }

    // private authSuccessfully(){
    //     this.isAuthenticated=true;
    //     this.authChange.next(true);
    //     this.router.navigate(['/home']);
    // }
}