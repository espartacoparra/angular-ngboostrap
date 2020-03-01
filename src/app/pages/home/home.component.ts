import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = ['https://www.tn23.tv/wp-content/uploads/2019/05/INTERNET-700x420.jpg', 'https://miro.medium.com/max/860/1*vUFNgofROTwY_rGd4_7Qsw.jpeg', 'https://wi-images.condecdn.net/image/KVz1DOaga5R/crop/405/f/iStock-638771132.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
