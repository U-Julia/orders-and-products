import { Component } from '@angular/core';
import { USER_LOGO } from '../../shared/constants';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.sass']
})
export class BaseComponent {
  readonly USER_LOGO = USER_LOGO;
}
