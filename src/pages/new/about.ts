import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { RecipeService } from '../../providers/recipe-service';

import { Camera } from 'ionic-native';

import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [RecipeService]
})
export class NewPage {

    newRecipe = {
        id: 0,
        name: null,
        time: null,
        image: null,
        short_description: null,
        long_description: [],
        ingredients: []
    };
    newPart = null;
    newIngredient = {
        name: null,
        amount: 0,
        measurement: null
    };
    newImage = null;

    editing = false;

    constructor(public navCtrl: NavController,
                private recipeService: RecipeService,
                private toastCtrl: ToastController,
                private navParams: NavParams) {
                    if (this.navParams.data.recipe) {
                        this.newRecipe = this.navParams.data.recipe;
                        this.editing = true;
                    }
    }

    editingPart:boolean = false;

    addPart() {
        if (!this.editingPart) {
            this.editingPart = true;
            return;
        }

        this.newRecipe.long_description.push(this.newPart);
        this.editingPart = false;
        this.newPart = null;
    }

    removePart(index) {
        this.newRecipe.long_description.splice(1, index);
    }

    editingIngredient = false;

    addIngredient() {
        if (!this.editingIngredient) {
            this.editingIngredient = true;
            return;
        }

        var copy = Object.assign({}, this.newIngredient);
        this.newRecipe.ingredients.push(copy);
        this.editingIngredient = false;
        this.newIngredient = {
            name: null,
            amount: 0,
            measurement: null
        }
    }

    removeIngredient(index) {
        this.newRecipe.ingredients.splice(1, index);
    }

    saveRecipe() {
        this.recipeService.createRecipe(this.newRecipe);
        this.navCtrl.parent.select(0);
    }

    cameraOptions = {
        quality: 100,
        allowEdit: false,
        sourceType: 'CAMERA'
    };

    addPicture(camera) {
        let cameraOptions = {};

        if (camera) {
            cameraOptions = {
                quality: 100,
                allowEdit: false,
                sourceType: 1
            };
        } else {
            cameraOptions = {
                quality: 100,
                allowEdit: false,
                sourceType: 0
            };
        }
        console.warn(cameraOptions);

        Camera.getPicture(cameraOptions).then((imageData) => {
            console.warn(imageData);
            this.newImage = imageData;//'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            let toast = this.toastCtrl.create({
                message: 'Der skete en fejl',
                duration: 2000,
                position: 'bottom',
                dismissOnPageChange: true
            });
            toast.present();
        });
    }

}
