import { Component } from '@angular/core';
import { IBlock } from '../../shared/interfaces/block.interface';
import { SearchFieldComponent } from '../../shared/components/search-field/search-field.component';
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
