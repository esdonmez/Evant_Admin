import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'providers/account.service';
import { UtilsService } from 'providers/utils.service';
import { Router } from '@angular/router';

declare var $: any;

declare interface ValidatorFn {
    (c: AbstractControl): {
        [key: string]: any;
    };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
  providers: [AccountService, UtilsService]
})
export class LoginComponent implements OnInit {

  test: Date = new Date();
  private toggleButton: any;
  private sidebarVisible: boolean;
  private nativeElement: Node;
  loginFormGroup : FormGroup;
  loginCredentials = {email: "", password: "", deviceId: "string"};
  token: string = "";

  constructor(private element: ElementRef, private formBuilder: FormBuilder, private router: Router, private accountService: AccountService, private utilsService: UtilsService) {
      this.nativeElement = element.nativeElement;
      this.sidebarVisible = false;
  }

  ngOnInit() {
    var navbar : HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

    setTimeout(function() {
        $('.card').removeClass('card-hidden');
    }, 700);

    this.loginFormGroup = this.formBuilder.group({
        email: [null, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        password: ['', Validators.required]
    });
  }

  sidebarToggle() {
    var toggleButton = this.toggleButton;
    var body = document.getElementsByTagName('body')[0];
    var sidebar = document.getElementsByClassName('navbar-collapse')[0];
    if (this.sidebarVisible == false) {
        setTimeout(function() {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    } else {
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    }
  }

  login() {
    if (this.loginFormGroup.valid) {
      this.accountService.login(this.loginCredentials)
          .subscribe(res => {
            if(res.isSuccess) {
                this.token = res.data;
                sessionStorage.setItem("token", this.token);
                this.router.navigate(["/dashboard"]);
            } else {
                this.utilsService.showNotification("danger", res.message);
            }  
      });
    } else {
        this.validateAllFormFields(this.loginFormGroup);
    }
  }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }
 
  displayFieldCss(form: FormGroup, field: string) {
    return {
      'has-error': this.isFieldValid(form, field),
      'has-feedback': this.isFieldValid(form, field)
    };
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
