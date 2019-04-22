import { SinginComponent } from './auth/singin/singin.component';
import { HeaderComponent } from './header/header.component';
import { SingupComponent } from './auth/singup/singup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'singup' ,component : SingupComponent},
  {path : 'singin' , component : SinginComponent}
  // {path: '' , component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
