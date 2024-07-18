import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RequestFormComponent,
    NavbarComponent,
    AdminPageComponent,
    ManagerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
