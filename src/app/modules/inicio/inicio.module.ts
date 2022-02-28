import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';

import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    PoPageModule
  ],
  exports: [InicioComponent]
})
export class InicioModule { }
