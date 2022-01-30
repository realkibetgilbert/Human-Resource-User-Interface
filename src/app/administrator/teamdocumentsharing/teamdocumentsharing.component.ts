import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teamdocumentsharing',
  templateUrl: './teamdocumentsharing.component.html',
  styleUrls: ['./teamdocumentsharing.component.css'],
})
export class TeamdocumentsharingComponent implements OnInit {
  teamDocuments = [
    {
      title: 'Gilbert',
      attachment: 'am on attachment',
      category: 'my category',
      description: 'this is description',
    },
    {
      title: 'Gilbert',
      attachment: 'am on attachment',
      category: 'my category',
      description: 'this is description',
    },
    {
      title: 'Gilbert',
      attachment: 'am on attachment',
      category: 'my category',
      description: 'this is description',
    },
    {
      title: 'Gilbert',
      attachment: 'am on attachment',
      category: 'my category',
      description: 'this is description',
    },
    {
      title: 'Gilbert',
      attachment: 'am on attachment',
      category: 'my category',
      description: 'this is description',
    },
    {
      title: 'Gilbert',
      attachment: 'am on attachment',
      category: 'my category',
      description: 'this is description',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
