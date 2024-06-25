import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { BlockApiService } from '../../services/block-api.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route = inject(ActivatedRoute);
  blockApiService = inject(BlockApiService);

  user$ = this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id')!;
      return this.blockApiService.getBlockDetails(id);
    }));
}
