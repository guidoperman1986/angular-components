import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen!: boolean;
  items = [
    { title: 'Un titulo', content: 'Un Content' },
    { title: 'Un titulo', content: 'Un Content' },
    { title: 'Un titulo', content: 'Un Content' },
  ];

  constructor() {}

  ngOnInit(): void {}

  showModal() {
    this.modalOpen = !this.modalOpen;
  }
}
