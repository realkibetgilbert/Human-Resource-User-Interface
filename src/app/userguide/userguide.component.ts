import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userguide',
  templateUrl: './userguide.component.html',
  styleUrls: ['./userguide.component.css'],
})
export class UserguideComponent implements OnInit {
  imagePath: string = './assets/images/humanresource.jpeg';

  constructor() {}

  ngOnInit(): void {}
}
