import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { yachtclub } from "../yachtclub/yachtclub";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  OpenPageYachtclub(){
    this.navCtrl.push(yachtclub)
  }


}