import { Component, Input } from '@angular/core';
import { MenuButtonComponent } from '../menubutton/menubutton.component';

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
  standalone: true,
  imports: [MenuButtonComponent]
})
export class TitleBarComponent {
  @Input() title: string = '';
  buttonTitle: string = 'Menu';
}