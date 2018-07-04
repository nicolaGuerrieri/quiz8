import { Injectable } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular'; 
@Injectable()
export class Global {
    public title: string = "Quizz8";
    
    public language: any;
    public preUrl: string;
    public userLogged: any;
    public loader;

    constructor(public platform: Platform, public loading: LoadingController) {
        if (navigator.language) {
            if (navigator.language.indexOf("it") > -1) {
                this.language = "it";
            } else {
                this.language = "en";
            }
        }

       
        this.preUrl = 'http://45.62.253.187:3000/';
    }

    openSocial(social) {
        if (social == 'facebook') {
            window.open('https://www.facebook.com/aroundthewodapp/?ref=aymt_homepage_panel');
        } else {
            window.open('https://www.instagram.com/aroundthewodapp/?hl=it');
        }
    }

    togliOverlay() {
        if (this.loader) {
            this.loader.dismiss();

        }
    }
    inserisciOverlay() {
        this.loader = this.loading.create({
            content: 'Please wait...',
        });
        this.loader.present();
    }
     
}
