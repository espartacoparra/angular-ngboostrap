import { Component, OnInit } from '@angular/core';
import { RequestService } from "../../services/request.service";
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  users: [];
  constructor(private request: RequestService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.request.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
