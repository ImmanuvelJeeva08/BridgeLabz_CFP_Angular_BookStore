import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public error = null;
  public hide = true;
  public valideUser = false;
  public tokenValue = null;
  public isLoading = false;
  public form = {
    email: null,
    password: null
  };

  constructor(
              private userService : UserService,
              private route: ActivatedRoute,
              private router: Router,
              private matSnackBar: MatSnackBar,
    ) { }
  
  ngOnInit() {
  }
  onSubmit() {
    this.isLoading = true;
    this.userService.login(this.form).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl("/home");
      },
      error => {alert(' enter valid username and password ');}
   );
  }

}


