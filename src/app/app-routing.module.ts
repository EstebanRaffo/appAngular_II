import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"alta",component:RegistroComponent},
  {path:"ingresar",component:LoginComponent},
  {path:"productos/:id",component:DetalleComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
