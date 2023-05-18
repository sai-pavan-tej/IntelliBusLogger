import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs/Subject';
import { Home } from './home.model';
import { Subscription } from 'rxjs';

@Injectable()
export class HomeService{
    recordSubmitted= new Subject<Home[]>();
    recordChanged = new Subject<Home[]>();
    private records: Home[] = [];
    private fbSubs:Subscription[]=[];
    finishedRecordChanged = new Subject<Home[]>();

    constructor(private db: AngularFirestore) {}

    homeServices(bId: string,iTime: string,oTime:string) {
        this.addDataToDatabase({
            date:new Date(),
            busid:bId,
            intime:iTime,
            outtime:oTime
        });     
     this.recordChanged.next(null);
     alert("Data Successfully Inserted !")
    }

    fetchRecords(){
        // this.db.collection('busrecords').valueChanges().subscribe((record:Home[])=>{
        //     this.recordChanged.next(record);
        // });
        this.fbSubs.push(this.db
            .collection('busrecords')
            .valueChanges()
            .subscribe((records: Home[]) => {
              this.finishedRecordChanged.next(records);
            }));
      
    }

    cancelSubscriptions() {
        this.fbSubs.forEach(sub => sub.unsubscribe());
      }

    private addDataToDatabase(record:Home){
        this.db.collection('busrecords').add(record);
    }
}