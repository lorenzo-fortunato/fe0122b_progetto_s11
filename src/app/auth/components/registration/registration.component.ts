import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  isLoading=false
  constructor(private authSrv:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  async onsubmit(form:NgForm){
    this.isLoading=true
    console.log(form.value)
    try {
      await this.authSrv.registration(form.value).toPromise()
      this.router.navigate(['/login'])
      this.isLoading=false
    } catch (error) {
      console.error(error)
      alert('Attenzione! Utente già registrato');
      form.reset();
      this.isLoading=false

    }
  }
}
