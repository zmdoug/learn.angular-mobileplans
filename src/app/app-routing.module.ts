import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlansComponent } from './pages/plans/plans.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'plans', component: PlansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
