import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';

@NgModule({
  declarations: [ ConversorComponent ],
  // , HttpClient 
  imports: [ CommonModule, FormsModule ],
  exports: [ ConversorComponent ],
  providers: [ MoedaService, ConversorService ]
})
export class ConversorModule { }
