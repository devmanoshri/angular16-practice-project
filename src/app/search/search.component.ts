import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { SearchService } from './../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchValue = '';
  searchedData = [] as Post[];
  subscribe = new Subscription();
  searchForm = this.formBuilder.nonNullable.group({
    search: ['', Validators.required],
  });

  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
   // this.searchResult();
  }

  searchResult() {
    this.searchService.getSearchedResult(this.searchValue).subscribe({
      next: (data:Post[]) => {
        this.searchedData = data;
      },
    });
  }
  onSearchSubmit() {
    this.searchValue = this.searchForm.value.search ?? '';
    console.log(this.searchValue);
    this.searchResult();

  }
}
