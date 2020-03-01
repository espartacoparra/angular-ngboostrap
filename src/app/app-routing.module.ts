import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { MembersComponent } from './pages/members/members.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'members', component: MembersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
