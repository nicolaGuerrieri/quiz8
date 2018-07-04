import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
 
@Component({
	selector: 'footer',
	templateUrl: 'footer.html' 
 })
export class Footer {
	
	
	public userLogged: any;
	constructor(private nav: NavController, ) {
	}
		
 

}