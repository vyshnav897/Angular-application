import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from "./auth-gaurd.service";
import { LoginComponent } from "./login/login.component"
import { DetailComponent } from "./detail/detail.component"
import { AppResolver } from './app-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
     path: 'list',
     component: AppComponent,
     children: [
      {
        path: '',
        component: ListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
        canActivate: [AuthGuard],
        resolve: {
          user: AppResolver
        }
      }
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
