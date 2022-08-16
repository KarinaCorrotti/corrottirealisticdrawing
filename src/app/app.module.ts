import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';

const appRoutes: Routes = [
  {path: '', component: MainpageComponent},
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,      
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
