import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Global} from '../services/global';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Footer } from '../pages/home/footer';
import { CategoriaPage  } from '../pages/categoria/categoria';
import { QuizPage  } from '../pages/quiz/quiz';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Footer,
    CategoriaPage,
    QuizPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Footer,
    CategoriaPage,
    QuizPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, Global
  ]
})
export class AppModule {}
