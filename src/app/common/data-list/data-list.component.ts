import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './../../model/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent implements OnInit {
  @Input() dataList: User[] = [];
  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  constructor() {}

  ngOnInit(): void { }

  //dataRow: User = new User();

  onSelectClick(dataRow: User): void {
    this.selectClick.emit(dataRow);
  }
  onUpdateClick(dataRow: User): void {
    this.updateClick.emit(dataRow);
  }
  onDeleteClick(dataRow: User): void {
    this.deleteClick.emit(dataRow);
  }
}
