import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './shared/authguard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent , canActivate:[ AuthGuard ]},
  { path: 'detail', component: DetailsComponent , canActivate:[ AuthGuard ]},
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
