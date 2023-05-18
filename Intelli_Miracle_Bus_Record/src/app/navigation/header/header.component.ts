import { Component, OnInit, EventEmitter,Output, OnDestroy } from '@angular/core';
import { OutputType } from '@angular/core/src/view';
import { AuthService } from 'src/app/auth/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
 @Output() sidenavToggle= new EventEmitter<void>();
  isAuth=false;
  authSubscription:Subscription;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authSubscription=this.authService.authChange.subscribe(authStatus => {
      this.isAuth=authStatus
    });
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }
}
