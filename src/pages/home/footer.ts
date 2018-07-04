import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, NavParams, Platform, Content, ViewController, ToastController } from 'ionic-angular';
 import { HomePage } from '../home/home'; 

@Component({
	selector: 'footer',
	templateUrl: 'footer.html' 
 })
export class Footer {
	
	
	public userLogged: any;
	constructor(private nav: NavController, ) {
	}
		
 

}