import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IBlock } from '../../interfaces/block.interface';
import { SearchFieldComponent } from '../search-field/search-field.component';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [
    RouterLink,
    SearchFieldComponent,
  ],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.css',
})
export class BlocksComponent {
  users: IBlock[] = [];
}
