import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { NewPage } from '../pages/new/about';
import { RecipePage } from '../pages/recipe/recipe';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    NewPage,
    RecipePage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewPage,
    RecipePage,
    HomePage,
    TabsPage
  ],
  providers: [
      Storage
  ]
})
export class AppModule {}
