import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  btnClickedMale = true;
  btnClickedFemale = false;

  firstName: string;
  email: string;
  gender: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  male() {
    this.btnClickedMale = true;
    this.btnClickedFemale = false;
    this.gender = 'M';
  }

  female() {
    this.btnClickedMale = false;
    this.btnClickedFemale = true;
    this.gender = 'F';
  }

  submitBtn() {
    this.dataService.setNewUserInfo({
      firstName: this.firstName,
      email: this.email,
      gender: this.gender 
    });
  }

}