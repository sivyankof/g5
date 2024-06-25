import { Component, output, DestroyRef, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';
import { BlockApiService } from '../../services/block-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IBlock } from '../../interfaces/block.interface';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SpinnerComponent,
  ],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.css',
})
export class SearchFieldComponent {
  fb = inject(FormBuilder);
  blockApiService = inject(BlockApiService);

  searchForm = this.fb.group({
    searchTerm: '',
  });
  isLoading = false;
  error: string | null = null;

  onNameChange = output<IBlock[]>();
  private destroyRef = inject(DestroyRef);

  onSubmit() {
    const searchTerm = this.searchForm.get('searchTerm')?.value?.trim();
    if (!searchTerm) {
      return;
    }

    this.isLoading = true;
    this.error = null;

    this.blockApiService.getBlocks(searchTerm).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (users: IBlock[]) => {
        this.onNameChange.emit(users);
        this.isLoading = false;
      }, error: () => {
        this.error = 'An error occurred while fetching data.';
        this.isLoading = false;
      },
    });
  }

}
