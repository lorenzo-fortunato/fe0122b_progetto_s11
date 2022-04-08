import { Component, OnInit } from '@angular/core';
import { NetflixService } from 'src/app/netflix.service';
import { Profili } from 'src/app/models/profili';
import { ServiceService } from 'src/app/auth/service.service';


@Component({
  selector: 'app-profili',
  templateUrl: './profili.component.html',
  styleUrls: ['./profili.component.scss']
})
export class ProfiliComponent implements OnInit {
  user$ = this.srvSrv.user$

  // arrUser!: Profili[];
  // userLog!: any;

  constructor(private srvSrv: ServiceService) { }

  ngOnInit(): void {

    // this.userLog = this.srvNet.getUser().toPromise()
    // this.arrUser = this.userLog
    // console.log(this.arrUser)



  }

}
