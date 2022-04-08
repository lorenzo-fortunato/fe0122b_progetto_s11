import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false
  constructor(private authSrv: ServiceService, private router:Router) {}

  ngOnInit(): void {
  }

  async accedi(form: NgForm) {
    this.isLoading = true
    console.log(form.value);
    try {
      await this.authSrv.login(form.value).toPromise()
      this.isLoading = false
      this.router.navigate(['/'])
    } catch (error) {
      this.isLoading = false
      form.reset();
      alert(error);
      console.error(error)
    }
  }

}
