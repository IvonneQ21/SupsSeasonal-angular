import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule, SuiDropdownModule} from 'ng2-semantic-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MonthsDropdownComponent } from './months-dropdown/months-dropdown.component';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {  MainsearchComponent } from './mainsearch/mainsearch.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  // authentication.
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'mainsearch', component: MainsearchComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredientsComponent,
    MonthsDropdownComponent,
    LoginComponent,
    RegisterFormComponent,
    MainsearchComponent,
    SearchResultsComponent

    // ProtectedComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    SuiDropdownModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  // providers: [
  //   // {provide: LocationStrategy, useClass : HashLocationStrategy },
  //   // {provide: APP_BASE_HREF, useValue: '/'}
  // ],
  bootstrap: [AppComponent]
})



// ]
export class AppModule { }
