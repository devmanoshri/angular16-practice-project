import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { of, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      pin: [''],
      country: [''],
    }),
    hobbies: this.formBuilder.array([
      // this.formBuilder.control(''),
      // this.formBuilder.control(''),
      // this.formBuilder.control(''),
    ]),
  });

  //userData$ = of({} as User);

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {}

  onSubmit() {
    console.log(this.userForm);
  }

  onAddHobby() {
    this.hobbiesControl.push(this.formBuilder.control(''));

    //this.userForm.get('name')?.setValue('ahana');
  }

  get hobbiesControl() {
    return this.userForm.get('hobbies') as FormArray;
  }

  ngOnInit(): void {
    //this.userData$ = this.userService.getSingleUser()
    this.userService.getSingleUser().subscribe({
      next: (userData: User) => {
        const hobbies = ['playing', 'drawing'];
        hobbies.forEach(() => {
          this.hobbiesControl.push(this.formBuilder.control(''));
        });
        this.userForm.patchValue({
          name: userData.name,
          email: userData.email,
          address: {
            street: userData.address.street,
            city: userData.address.city,
            pin: userData.address.city,
          },
          hobbies: hobbies,
        });
      },
      error: () => {},
    });
  }
}
