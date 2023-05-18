import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public constructor(private titleService: Title,private authService:AuthService ) { }
  
  ngOnInit(){
    this.titleService.setTitle("Miracle Bus Track")
    this.authService.initAuthListener();
  }
  
  onToggle(){

  }
}
