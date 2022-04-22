import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeBalanceComponent } from './components/change-balance/change-balance.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ViewTablesComponent } from './components/view-tables/view-tables.component';

const routes: Routes = [
  {path: '',component:MenuComponent},
  {path: 'create_account',component:CreateAccountComponent},
  {path: 'tables',component:ViewTablesComponent},
  {path: 'balance',component:ChangeBalanceComponent},
  {path: '**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
