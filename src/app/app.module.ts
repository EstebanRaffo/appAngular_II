import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './Components/menu/menu.component';
import { ListadosModule } from './listados/listados.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    CatalogoComponent,
    DetalleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    ListadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
