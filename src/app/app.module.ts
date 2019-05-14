import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { IndexNotLoggedComponent } from './index-not-logged/index-not-logged.component';
import { IndexLoggedComponent } from './index-logged/index-logged.component';
import { MenuComponent } from './menu/menu.component';
import { ProfilComponent } from './profil/profil.component';
import { LogoutComponent } from './logout/logout.component';
import { LoggedUserMenuComponent } from './logged-user-menu/logged-user-menu.component';
import { AddFilesComponent } from './add-files/add-files.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes = [
  {
    path: '', component: IndexNotLoggedComponent, children: [
      { path: '', component: RegisterComponent, outlet: 'register' },
      { path: '', component: LoginComponent, outlet: 'login' }
    ]
  },
  {
    path: 'connected', component: IndexLoggedComponent, children: [
      { path: 'add', component: AddFilesComponent }
    ]
  },
  { path: 'logout', component: LogoutComponent },
  { path: ':username', component: ProfilComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    IndexNotLoggedComponent,
    IndexLoggedComponent,
    MenuComponent,
    ProfilComponent,
    LogoutComponent,
    LoggedUserMenuComponent,
    AddFilesComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule, NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatInputModule, MatIconModule,
    MatToolbarModule, MatGridListModule,
    MatCardModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
