import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppPrincipalTableComponent } from './app-principal-table/app-principal-table.component';
import { PositiveBalanceComponent } from './positive-balance/positive-balance.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { NewRecordModalComponent } from './new-record-modal/new-record-modal.component';
import { NumericOnlyDirective } from './numeric-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppPrincipalTableComponent,
    PositiveBalanceComponent,
    AppFooterComponent,
    NewRecordModalComponent,
    NumericOnlyDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
