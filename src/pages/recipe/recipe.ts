import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NewPage } from '../new/about';

/*
  Generated class for the Recipe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-recipe',
    templateUrl: 'recipe.html'
})
export class RecipePage {

    currentRecipe = {
        name: null,
        time: null,
        image: null,
        short_description: null,
        long_description: [],
        ingredients: []
    };

    constructor(public navCtrl: NavController,
                private navParams: NavParams,
                public alertCtrl: AlertController) {
        console.log(this.navParams);
        this.currentRecipe = this.navParams.data.recipe;
    }

    edit() {
        let confirm = this.alertCtrl.create({
            title: 'Ønsker du at redigere denne opskrift?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Nej, tak',
                    handler: () => {
                    console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Jep',
                    handler: () => {
                        console.log('Agree clicked');
                        this.navCtrl.push(NewPage, {'recipe': this.currentRecipe});
                    }
                }
            ]
        });
        confirm.present();
    }

}
