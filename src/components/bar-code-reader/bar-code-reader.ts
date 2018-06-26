import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'bar-code-reader',
  templateUrl: 'bar-code-reader.html'
})
export class BarCodeReaderComponent {

  encodedData: any = {};
  scannedData: any = {};

  constructor(private _barcodeScanner: BarcodeScanner) {

    // Prueba de escaneo
    this.scan();

  }

  public scan() {
    let options: BarcodeScannerOptions = {
      prompt: 'Scan you barcode'
    };
    this._barcodeScanner.scan(options).then(data => {

      this.scannedData = {};
      if (data && data.text) {
        this.scannedData = {
          format: data.format,
          cancelled: data.cancelled,
          srcBase64: data.text
        };
      }

    }).catch(err => {
      console.log('Error al escanear', err);
    });
  }

  public encodeText(text) {
    let type:string = this._barcodeScanner.Encode.TEXT_TYPE;
    this._barcodeScanner.encode(type, text).then(data => {

      this.encodedData = {};
      if (data && data.text) {
        this.encodedData = {
          format: data.format,
          cancelled: data.cancelled,
          srcBase64: data.text
        };
      }

    }).catch(err => {
      console.log('Error al encodear', err);
    });
  }

}
