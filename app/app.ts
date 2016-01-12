import {App, Platform, Config} from 'ionic-framework/ionic';
import {HomePage} from './pages/home/home';

@App({
  template: '<ion-nav id="nav" [root]="root" #content></ion-nav>'
  // Check out the config API docs for more info
  // http://ionicframework.com/docs/v2/api/config/Config/
  config: {}
})
export class MyApp {
  constructor(platform: Platform) {
    this.root = HomePage;

    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });
  }
}
