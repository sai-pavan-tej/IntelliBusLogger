import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from '../home.service';
import { AuthService } from '../../auth/auth.service';
//import { AngularFirestore } from 'angularfire2/firestore';
import {Observable, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import { Home } from '../home.model';

@Component({
  selector: 'app-busentry',
  templateUrl: './busentry.component.html',
  styleUrls: ['./busentry.component.css']
})
export class BusentryComponent implements OnInit, OnDestroy {

   records:Home[];
   recordSubscription:Subscription; 
  constructor(private homeService:HomeService,private authService: AuthService) { }

  ngOnInit() {
    this.recordSubscription = this.homeService.recordChanged.subscribe(
      exercises => (this.records = exercises)
    );
    this.homeService.fetchRecords();
  }

  onSubmit(form: NgForm){
    this.homeService.homeServices(form.value.busid,form.value.itime,form.value.otime);
    this.authService.refresh();
  }

  ngOnDestroy() {
    this.recordSubscription.unsubscribe();
  }
}
