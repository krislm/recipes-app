import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { RecipeService } from '../../providers/recipe-service';

import { RecipePage } from '../recipe/recipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RecipeService]
})
export class HomePage implements OnInit {

    recipes = [];

    constructor(public navCtrl: NavController, private recipeService: RecipeService) {

    }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }

    searchResults = [];

    findRecipe(search) {
        if (!search.target.value) {
            this.searchResults = [];
            return;
        }
        if (search.target.value.length > 3) {
            let searchString = search.target.value.toLowerCase();
            this.recipes.forEach((recipe) => {
                let recipeName = recipe.name.toLowerCase();
                if (recipeName.indexOf(searchString) > -1) {
                    this.searchResults.push(recipe);
                }
            })
        }
    }

    selectRecipe(recipe) {
        //this.recipeService.currentRecipe = recipe;
        this.navCtrl.push(RecipePage, {'recipe':recipe});
    }

}
