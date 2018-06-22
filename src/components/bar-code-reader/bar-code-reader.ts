import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'bar-code-reader',
  templateUrl: 'bar-code-reader.html'
})
export class BarCodeReaderComponent {

  encodedData: any = {};
  scannedData: any = {};

  constructor(private barcodeScanner: BarcodeScanner) {
  }

  public scan() {
    let options: BarcodeScannerOptions = {
      prompt: 'Scan you barcode'
    };
    this.barcodeScanner.scan(options).then(data => {
      this.scannedData = data;
      console.log('Datos escaneados: ', data);
    }).catch(err => {
      console.log('Error al escanear', err);
    });
  }

  public encodeText(text) {
    let type:string = this.barcodeScanner.Encode.TEXT_TYPE;
    this.barcodeScanner.encode(type, text).then(data => {
      this.encodedData = data;
      console.log('Datos encodeados: ', data);
    }).catch(err => {
      console.log('Error al encodear', err);
    });
  }

}
