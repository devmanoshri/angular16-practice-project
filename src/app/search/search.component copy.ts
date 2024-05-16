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

  isOpenDropDown = false;
  isSearchKeySelected = false;
  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.searchValueChange();
  }

  searchResult() {
    this.searchService.getSearchedResult(this.searchValue).subscribe({
      next: (data: Post[]) => {
        this.searchedData = data;
      },
    });
  }

  selectSearchKey(key: string) {
    this.searchValue = key ?? '';
    this.searchResult();
    this.searchForm.patchValue({ search: key });
    this.isOpenDropDown = false;
    this.isSearchKeySelected = true;
  }
  toggleDropDown() {
    this.isOpenDropDown = !this.isOpenDropDown;
  }
  searchValueChange() {
    this.searchForm.get('search')?.valueChanges.subscribe((value: string) => {
      this.searchValue = value;
      this.searchResult();
      this.isOpenDropDown = true;
    });
  }
}
