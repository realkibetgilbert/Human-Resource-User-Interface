import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teamannouncement',
  templateUrl: './teamannouncement.component.html',
  styleUrls: ['./teamannouncement.component.css'],
})
export class TeamannouncementComponent implements OnInit {
  announcements = [
    {
      title: 'Announcements',
      date: '29/01/2000',
      published: 'this is published',
      attachment: 'attached',
      notify: 'i have notify',
      content: 'content',
    },
    {
      title: 'Announcements',
      date: '29/01/2000',
      published: 'this is published',
      attachment: 'attached',
      notify: 'i have notify',
      content: 'content',
    },
    {
      title: 'Announcements',
      date: '29/01/2000',
      published: 'this is published',
      attachment: 'attached',
      notify: 'i have notify',
      content: 'content',
    },
    {
      title: 'Announcements',
      date: '29/01/2000',
      published: 'this is published',
      attachment: 'attached',
      notify: 'i have notify',
      content: 'content',
    },
    {
      title: 'Announcements',
      date: '29/01/2000',
      published: 'this is published',
      attachment: 'attached',
      notify: 'i have notify',
      content: 'content',
    },
    {
      title: 'Announcements',
      date: '29/01/2000',
      published: 'this is published',
      attachment: 'attached',
      notify: 'i have notify',
      content: 'content',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
