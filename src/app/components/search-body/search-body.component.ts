import { Component } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.scss']
})

export class SearchBodyComponent {
  
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 12,
    currentPage: 1
  };
}
