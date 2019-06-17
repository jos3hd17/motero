import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(public navigation: NavController) { }

  ngOnInit() {
  }

  makeLogin(user) {
    this.navigation.navigateRoot('/app-container');
  }

  sendToLogin() {

  }

  sendToRegister() {

  }

}
