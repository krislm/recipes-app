import { Injectable } from '@angular/core';

@Injectable()
export class Recipe {
    constructor(public id: string,
                public name: string,
                public image: string,
                public time: string,
                public short_description: string,
                public long_description: Array<any>,
                public ingredients: Array<any>) {

    }
}

/*export class Ingredient {
    constructor(public name: string,
                public amout: number,
                public measurement: string) {}
}*/
