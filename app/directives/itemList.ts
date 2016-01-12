import {NavController} from 'ionic-framework/ionic';

import {Component} from 'angular2/core';

import {DetailsPage} from '../pages/details/details';

@Component({
    selector: 'item-list',
    templateUrl: 'build/directives/item_list.html'
})
export class ItemList {
    private nav;
    private items;

    constructor(navController: NavController) {
        this.nav = navController;

        this.items = [
            {name: 'Peter', age: 53},
            {name: 'Maggy', age: 12},
            {name: 'Steven', age: 24},
            {name: 'Kyle', age: 22},
            {name: 'Mark', age: 16},
            {name: 'Dennis', age: 29},
            {name: 'Tom', age: 52}
        ]
    }

    itemSelected(item) {
        this.nav.push(DetailsPage, {
            name: item.name,
            age: item.age
        });
    }
}
