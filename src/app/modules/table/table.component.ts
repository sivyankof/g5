import { Component } from '@angular/core';
import { IBlock } from '../../interfaces/block.interface';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    SearchFieldComponent,
    RouterLink,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  users: IBlock[] = [];
}
