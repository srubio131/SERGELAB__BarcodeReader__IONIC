import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';

/********************
 *   Mocks
 ********************/
class BarcodeScannerMock extends BarcodeScanner {
  scan(options?:BarcodeScannerOptions) {
    return new Promise<any>((resolve, reject) => {
      let data = {
        text: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAAEiAQMAAABncE31AAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABB0lEQVRoge3YzQ2DMAyGYUsMwEhZPSMxABJN7IRETUQvmErt+x34fThZ2AERQggh/5OjZC9Hca1XIspb2cmaVKyb/gbKU61al733WjDUgyoH9RVVT1HPKd3pvW2xCvU3UI6qTeQyFT7MbdRtqku4uIdyUOmdEGtFEvTtkLQZPMpDpVbUrix2ZA8JylsFvZJnQa6Lnmp7Qj2g8jsRNpE2jOWsFcpT2SLUWpEtifTJ8esXdbvq/Ln2n/Uv1P3qKNmlNqVZZ0K5qKi79gGgi6Nt6EwoD9X+uOW62HyQ5b1CKE/V/W6+qBDKSZUKTaYCykXpri6ExuKg/NQ5kdtqaLJeRTkoQgghv54Xi7p8LsFRHbsAAAAASUVORK5CYII=",
        format: 'QR_CODE',
        cancelled: false
      };
      resolve(data);
    })
  }
  encode(type:string, data:any) {
    return new Promise<any>((resolve, reject) => {
      let data = {
        text: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAAEiAQMAAABncE31AAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABB0lEQVRoge3YzQ2DMAyGYUsMwEhZPSMxABJN7IRETUQvmErt+x34fThZ2AERQggh/5OjZC9Hca1XIspb2cmaVKyb/gbKU61al733WjDUgyoH9RVVT1HPKd3pvW2xCvU3UI6qTeQyFT7MbdRtqku4uIdyUOmdEGtFEvTtkLQZPMpDpVbUrix2ZA8JylsFvZJnQa6Lnmp7Qj2g8jsRNpE2jOWsFcpT2SLUWpEtifTJ8esXdbvq/Ln2n/Uv1P3qKNmlNqVZZ0K5qKi79gGgi6Nt6EwoD9X+uOW62HyQ5b1CKE/V/W6+qBDKSZUKTaYCykXpri6ExuKg/NQ5kdtqaLJeRTkoQgghv54Xi7p8LsFRHbsAAAAASUVORK5CYII=",
        format: 'QR_CODE',
        cancelled: false
      };
      resolve(data);
    })
  }
}

class CameraPreviewMock extends CameraPreview {
  startCamera(cameraPreviewOpts?: CameraPreviewOptions) {
    return new Promise<any>((resolve, reject) => {
      let data = {
        camera: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAAEiAQMAAABncE31AAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABB0lEQVRoge3YzQ2DMAyGYUsMwEhZPSMxABJN7IRETUQvmErt+x34fThZ2AERQggh/5OjZC9Hca1XIspb2cmaVKyb/gbKU61al733WjDUgyoH9RVVT1HPKd3pvW2xCvU3UI6qTeQyFT7MbdRtqku4uIdyUOmdEGtFEvTtkLQZPMpDpVbUrix2ZA8JylsFvZJnQa6Lnmp7Qj2g8jsRNpE2jOWsFcpT2SLUWpEtifTJ8esXdbvq/Ln2n/Uv1P3qKNmlNqVZZ0K5qKi79gGgi6Nt6EwoD9X+uOW62HyQ5b1CKE/V/W6+qBDKSZUKTaYCykXpri6ExuKg/NQ5kdtqaLJeRTkoQgghv54Xi7p8LsFRHbsAAAAASUVORK5CYII="
      };
      resolve(data);
    })
  }
}


/********************
 *   AppProviders
 ********************/
 
export class BarcodeReaderProviders {

    public static getProviders() { 
        let providers; 
        if(document.URL.includes('https://') || document.URL.includes('http://')) { 
          // Use browser providers
          providers = [
            { provide: CameraPreview, useClass: CameraPreviewMock },
            { provide: BarcodeScanner, useClass: BarcodeScannerMock }
          ];
 
        } else {
          // Use device providers
          providers = [
            CameraPreview,
            BarcodeScanner
          ];
        } 
        return providers;
    }

}