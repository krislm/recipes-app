import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Recipe } from '../models/recipe';
import { RECIPES } from '../app/mock-recipes';

import { Storage } from '@ionic/storage';

/*
  Generated class for the RecipeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RecipeService {

    //currentRecipe = {};
    storage;

    constructor(storage: Storage) {
        this.storage = storage;

        RECIPES.forEach((recipe) => {
            storage.set(recipe.id, recipe);
        })
    }

    getRecipes(): Recipe[] {
        let temp = [];
        this.storage.forEach((value, key, index) => {
            temp.push(value);
        });
        return temp;
        // return RECIPES;
    }

    createRecipe(recipe) {
        recipe.id = this.getRandomInt();
        RECIPES.push(recipe);
        this.storage.set(recipe.id, recipe);
    }

    updateRecipe(recipe) {
        this.storage.set(recipe.id, recipe);
        // for (let i in RECIPES) {
        //     if (RECIPES[i].id == recipe.id) {
        //         RECIPES[i] = recipe;
        //     }
        // }
    }

    getRandomInt() {
        return ''+Math.floor(Math.random() * (999999 - 100 + 1)) + 1000;
    }

}
