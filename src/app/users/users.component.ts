import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any;

  constructor(private service: AppHttpService) { }

  ngOnInit() {
    this.service.build('users')
      .list()
      .subscribe((data) => {
        this.users = data;
      });
  }

}
