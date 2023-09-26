import { Component, Input } from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  constructor(private location: Location) {}

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() no?: string;
  @Input() centerText?: boolean = false;

  onBack(): void {
    this.location.back()
  }
}
