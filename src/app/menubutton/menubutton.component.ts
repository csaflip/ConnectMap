import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'menubutton',
  templateUrl: './menubutton.component.html',
  styleUrls: ['./menubutton.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class MenuButtonComponent {
  @Input() buttonTitle: string = '';
  @Input() routerLink: string | any[] = ''; // Accept string or array for routerLink
}