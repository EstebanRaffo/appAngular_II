import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ResultadosComponent } from './resultados/resultados.component';

// Al crear el componente main dentro del modulo listados no hace el update dentro del app.module si no dentro de 
// listados.module

@NgModule({
  declarations: [
    MainComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class ListadosModule { }
