import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarCodeReaderComponent } from './bar-code-reader';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
	declarations: [
		BarCodeReaderComponent
	],
	providers: [
		BarcodeScanner
	],
	imports: [
		CommonModule
	],
	exports: [
		BarCodeReaderComponent
	]
})
export class BarCodeReaderModule {}
