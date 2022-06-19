import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../CustomValidators';

@Component({
  selector: 'app-prac',
  templateUrl: './prac.component.html',
  styleUrls: ['./prac.component.css']
})
export class PracComponent implements OnInit {


  password = new FormControl('', [Validators.required, Validators.minLength(6),PasswordValidator])


  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['angular rocks', [Validators.required, Validators.email]]
  })

  constructor(private fb: FormBuilder) { }



  get emailControl() {
    return this.form.controls.email;
  }


  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.status);
  }

  chageVal() {
    // this.email.setValue('aaaa');
  }

}
