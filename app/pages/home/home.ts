import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Pouch} from '../../services/pouch';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  
  constructor(private navController: NavController, private pouch: Pouch) {
    
  }
  
  test() {
    console.log('Create and sync pouch...');
    this.pouch.setup();
  }
  
}
