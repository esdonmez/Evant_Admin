import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountRoutes } from './account.routing';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forgetpassword/forgetpassword.component';
import { FieldErrorDisplayComponent } from 'pages/account/field-error-display/field-error-display.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccountRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    FieldErrorDisplayComponent
  ]
})
export class AccountModule { }
