import { Component, Input } from '@angular/core';

@Component({
  selector: 'menubutton',
  templateUrl: './menubutton.component.html',
  styleUrls: ['./menubutton.component.scss'],
  standalone: true
})
export class MenuButtonComponent {
  @Input() buttonTitle: string = '';
}