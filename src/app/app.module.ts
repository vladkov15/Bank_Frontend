import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ViewTablesComponent } from './components/view-tables/view-tables.component';
import { ChangeBalanceComponent } from './components/change-balance/change-balance.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TableItemComponent } from './components/table-item/table-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    CreateAccountComponent,
    ViewTablesComponent,
    ChangeBalanceComponent,
    NotFoundComponent,
    TableItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
