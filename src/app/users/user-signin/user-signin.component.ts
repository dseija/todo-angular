import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss'],
})
export class UserSigninComponent implements OnInit {
  form!: FormGroup;
  submitting = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly userService: UsersService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.submitting = true;
      this.userService.login(this.form.value).subscribe({
        next: (userProps) => {
          console.log('Successfully logged in', userProps);
          this.submitting = false;
        },
        error: (errorStatus: number) => {
          console.log(
            errorStatus === 401
              ? 'Wrong username or password.'
              : 'Unexpected error, please try again.'
          );
          this.submitting = false;
        },
      });
    }
  }
}
