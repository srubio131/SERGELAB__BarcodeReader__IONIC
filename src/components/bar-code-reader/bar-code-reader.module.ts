import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { BarcodeReaderProviders } from './bar-code-reader.providers';
import { BarCodeReaderComponent } from './bar-code-reader';


@NgModule({
  declarations: [
    BarCodeReaderComponent
  ],
  providers: BarcodeReaderProviders.getProviders(),
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BarCodeReaderComponent
  ]
  })
export class BarCodeReaderModule {}