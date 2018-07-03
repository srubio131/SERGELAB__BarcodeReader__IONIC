import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';

@Component({
  selector: 'bar-code-reader',
  templateUrl: 'bar-code-reader.html'
})
export class BarCodeReaderComponent {

  encodedData: any = {};
  scannedData: any = {};

  constructor(private _barcodeScanner: BarcodeScanner, 
              private _cameraPreview: CameraPreview
  ) {

    // Start preview
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: false,
      previewDrag: true,
      toBack: true,
      alpha: 1
    };
    // start camera
    this._cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        this.scan();
        console.log("ok: " + res)
      },
      (err) => {
        console.log("err: " + err)
      });

  }

  public scan() {
    this._barcodeScanner.scan().then(data => {
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
