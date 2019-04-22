import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private authSevice: AuthService) { }

  ngOnInit() {
  }
  onSingin(f: NgForm){
    const email = f.form.value.email;
    const password = f.form.value.password; 
    console.log("signin",email); 

    this.authSevice.singinUser(email,password);
    
    //this.authService.singUpUser(email,password);
      
    
    }
}
