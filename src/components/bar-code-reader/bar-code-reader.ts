import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'bar-code-reader',
  templateUrl: 'bar-code-reader.html'
})
export class BarCodeReaderComponent {

  //encodedData: any = {};
  scannedData: any = {};
  scanSub:any = {};

  constructor(private _qrScanner: QRScanner) {

    // Request the permission early
    this._qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted

        this._qrScanner.hide(); // hide camera preview

        // start scanning
        this.scanSub = this._qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);

          this._qrScanner.show();
          //this._qrScanner.hide(); // hide camera preview
        });

      } else if (status.denied) {
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
        this._qrScanner.openSettings();
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    })
    .catch((e: any) => console.log('Error is', e));

  }

  stopPreview() {
    //if (this.scanSub) {
      //this.scanSub.unsubscribe();
      this._qrScanner.pausePreview();
   // }
  }

}
