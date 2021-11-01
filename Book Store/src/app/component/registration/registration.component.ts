import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public error = null;
  message = null;
  public isloading = false;
  public form = {
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
    mobileNumber: null,
    role: null,
  };
  constructor(
              private userService: UserService,
              private router: Router,
              private matSnakeBar: MatSnackBar
  ) {
  }
  ngOnInit() {
  }
  
  onSubmit() {
    this.isloading = true;
          this.userService.addUserDetails(this.form).subscribe(data =>{
            console.log("post",data);
          })
    this.router.navigateByUrl("/login");
  }


}
