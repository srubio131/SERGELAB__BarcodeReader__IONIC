import { Component } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner'; //TODO. Este debería estar en el modulo

@Component({
  selector: 'bar-code-reader',
  templateUrl: 'bar-code-reader.html'
})
export class BarCodeReaderComponent {

  constructor(private barcodeScanner: BarcodeScanner) {

  	this.barcodeScanner.scan().then(barcodeData => {
	 console.log('Barcode data', barcodeData);
	}).catch(err => {
	    console.log('Error', err);
	});

  }



}
