import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SymbolListComponent } from './symbol-list/symbol-list.component';
import { ListService } from './list.service';
import { SymbolDetailesComponent } from './symbol-detailes/symbol-detailes.component';
import { HttpClientModule } from '@angular/common/http';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { LayoutModule } from '@angular/cdk/layout';
import {  MatTableModule, MatToolbarModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {BidiModule} from '@angular/cdk/bidi';
import { MatCardModule, MatCheckboxModule, MatProgressSpinnerModule, MatButtonModule, MatPaginatorModule} from '@angular/material';
import {MatSidenavModule ,  MatSortModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SymbolCompaireComponent } from './symbol-compaire/symbol-compaire.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    SymbolListComponent,
    SymbolDetailesComponent,
    // SymbolCompaireComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
    FormsModule, CommonModule, MatToolbarModule, MatTableModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    BidiModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    MatSortModule,
    FlexLayoutModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
