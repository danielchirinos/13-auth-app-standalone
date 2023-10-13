import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

    private fb = inject( FormBuilder );

    public myForm: FormGroup = this.fb.nonNullable.group({
        email: ["", [ Validators.required, Validators.email ]],
        password: ["", [ Validators.required, Validators.minLength(6) ]],
    })


    login(){
        console.log( this.myForm.value );
    }

}
