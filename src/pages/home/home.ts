import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
//import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  allPermissionsOk: boolean = false;

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController 
              //private _diagnostic: Diagnostic
  ) {
    this.allPermissionsOk = true;
    //this.isAllPermissionsOk();

  }

  /*public isAllPermissionsOk() {
    // TODO. Se pueden añadir mas separadas por comas
    forkJoin(this._diagnostic.isCameraAuthorized())
    .subscribe(results => {
        // Camera
        if (!results[0]) { // Not authorized
          // Request for authorization
          this.requestAuthorization(this._diagnostic.requestCameraAuthorization);
          return;
        }
        this.allPermissionsOk = true;
    });
  }

  private requestAuthorization(requestAuthorization) {
    requestAuthorization().then((status) => {
      // Permissions not granted
      if(status !== this._diagnostic.permissionStatus.GRANTED) {        
        this.toastCtrl.create(
            {
                //message: msg, 
                position: "bottom",
                duration: 5000
            }
        ).present();
      }
    });
  }*/

}
