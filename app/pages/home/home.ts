import {Page} from 'ionic-framework/ionic';

import {ItemList} from '../../directives/ItemList';

@Page({
    directives: [ItemList],
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    contructor() {

    }
}
