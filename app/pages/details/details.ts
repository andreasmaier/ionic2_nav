import {Page, NavParams} from 'ionic-framework/ionic';

import {ItemList} from '../../directives/itemList';

@Page({
    directives: [ItemList],
    templateUrl: 'build/pages/details/details.html'
})
export class DetailsPage {
    contructor(navParams: NavParams) {
        this.name = this.navParams.data.name;
        this.age = this.navParams.data.age;
    }
}
