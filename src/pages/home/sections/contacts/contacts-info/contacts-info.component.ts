import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'section-contacts-info',
  imports: [TranslatePipe],
  templateUrl: './contacts-info.component.html',
  styleUrl: './contacts-info.component.scss'
})
export class ContactsInfoComponent {

}
