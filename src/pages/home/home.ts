import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Global } from '../../services/global';
import { CategoriaPage  } from '../categoria/categoria';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public global: Global) {

  }

  scegliCategoria(){

    this.navCtrl.push(CategoriaPage, {
    });
  }
}
