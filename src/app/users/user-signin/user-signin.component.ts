import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss'],
})
export class UserSigninComponent implements OnInit {
  form!: FormGroup;
  submitting = false;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log('signin!', this.form.value);
      this.submitting = true;
      setTimeout(() => (this.submitting = false), 2000);
    }
  }
}
