import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Ricardo', age: 24, job: 'Feto', employed: true },
    { name: 'Pato', age: 24, job: 'Feo', employed: false },
    { name: 'Leandro', age: 24, job: 'Idiot', employed: true },
  ];

  headers = [
    { key: 'employed', label: 'Has a Job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
