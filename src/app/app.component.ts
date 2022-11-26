import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  fistName?: string = 'John';

  title = 'template-forms';

  user = {
    firstName: 'John',
    lastName: 'Doe',
    userContactInfo: {
      email: 'John@doe',
      phone: '123456789'
    }
  }

  @ViewChild('f') signupForm!: NgForm;

  ngAfterViewInit(): void {
    console.log(this.signupForm);

  }

  fillValues() {
    this.signupForm.form.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      userContactInfo: {
        email: 'John@doe',
        phone: '123456789'
      }
    })
  }

  addUser(firstname: string) {
    console.log(firstname);
  }

  // submit(form: NgForm) {
  //   console.log('Form submitted');
  //   console.log(form);
  //   console.log(form.value);
  //   console.log(form.value.firstName);
  //   const {firstName, lastName} = form.value;
  //   console.log(firstName, lastName);
  // }

  submit() {
    console.log('Form submitted');
    console.log(this.signupForm);
    console.log(this.signupForm.value);
    console.log(this.signupForm.value.firstName);
    const {firstName, lastName} = this.signupForm.value;
    console.log(firstName, lastName);

    // this.signupForm.reset()

    this.signupForm.controls['firstName'].setValue('changed');
  }

  firstNameChanged($event: any) {
    console.log($event);
    this.fistName = $event;
  }


}
