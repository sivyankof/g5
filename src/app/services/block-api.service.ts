import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IBlockResponse, IBlock } from '../interfaces/block.interface';
import { BASE_URL } from './base-url.constants';

@Injectable({
  providedIn: 'root',
})
export class BlockApiService {
  constructor(private http: HttpClient) {
  }

  getBlocks(user: string = ''): Observable<IBlock[]> {
    return this.http.get<IBlockResponse>(`${ BASE_URL }/search/users?q=${ user }&per_page=20&page=1`)
      .pipe(
        map(response => response.items),
      );
  }

  getBlockDetails(id: string): Observable<IBlock> {
    return this.http.get<IBlock>(`${ BASE_URL }/user/${ id }`);
  }
}
