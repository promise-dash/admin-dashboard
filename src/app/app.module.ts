import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as feather from 'feather-icons';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { HomeComponent } from './routes/home/home.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { UserComponent } from './routes/user/user.component';
import { CreateUserComponent } from './routes/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './routes/edit-user/edit-user.component';
import { ProductsComponent } from './routes/products/products.component';
import { CartComponent } from './routes/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    CardComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    UserComponent,
    CreateUserComponent,
    EditUserComponent,
    ProductsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgChartsModule,
    RouterModule.forRoot([ 
      {path: '', component: HomeComponent},
      {path: 'user', component: ProfileComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule {
  ngAfterViewInit() {
    feather.replace();
  }

 }
