import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymbolListComponent } from './symbol-list/symbol-list.component';
import { SymbolDetailesComponent } from './symbol-detailes/symbol-detailes.component';
import { SymbolCompaireComponent } from './symbol-compaire/symbol-compaire.component';
const routes: Routes = [
   { path: '', component: SymbolListComponent },
  { path: 'details/:id', component: SymbolDetailesComponent },
  // { path: 'Compaire', component: SymbolCompaireComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
