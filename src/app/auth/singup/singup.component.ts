import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSingup(f: NgForm){
  const email = f.form.value.email;
  const password = f.form.value.password; 
  console.log("aaaaaaa",email); 
  
  this.authService.singUpUser(email,password);
    
  
  }

}
