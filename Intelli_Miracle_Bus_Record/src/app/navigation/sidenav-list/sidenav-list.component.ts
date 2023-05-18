import { Component, OnInit,EventEmitter,Output , OnDestroy} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeWindow=new EventEmitter<void>();
  isAuth=false;
  authSubscription:Subscription;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authSubscription=this.authService.authChange.subscribe(authStatus => {
      this.isAuth=authStatus
    });
  }

  onClose(){
    this.closeWindow.emit();
  }

  onLogout(){
    this.authService.logout();
    this.onClose();
  }
  
  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }
}
