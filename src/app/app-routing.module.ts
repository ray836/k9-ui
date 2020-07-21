import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { BreederPageComponent } from './breeder-page/breeder-page.component';
import { AddListingComponent } from './add-listing/add-listing.component';


const routes: Routes = [
  { path: '', component: BreederPageComponent},
  { path: 'listing', component: ListingComponent },
  { path: 'add-listing', component: AddListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
