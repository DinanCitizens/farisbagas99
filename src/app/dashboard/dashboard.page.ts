import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  userEmail: string;

  constructor(

  private navCtrl: NavController,
  private authService: AuthenticationService,
  public menuCtrl: MenuController

  ) { }

  ionViewWillEnter() {
  this.menuCtrl.enable(true);
  }

  ngOnInit() {

  if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }

  }

}
