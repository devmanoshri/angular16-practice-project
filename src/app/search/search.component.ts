import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Subscription,
  switchMap,
} from 'rxjs';
import { Post } from '../models/post.model';
import { SearchService } from './../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  searchValue = '';
  searchedData = [] as Post[];
  selectedData = {} as Post;
  subscribe = new Subscription();
  searchForm = this.formBuilder.nonNullable.group({
    search: ['', Validators.required],
  });

  isOpenDropDown = false;
  isSearchKeySelected = false;
  addSubscription = new Subscription();

  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.searchValueChange();
  }

  selectSearchKey(key: number) {
    this.selectedData = this.searchedData.filter((data) => data.id === key)[0];
    this.searchForm.patchValue(
      { search: this.selectedData.title },
      { emitEvent: false },
    );
    this.isOpenDropDown = false;
    this.isSearchKeySelected = true;
  }
  toggleDropDown() {
    this.isOpenDropDown = !this.isOpenDropDown;
  }
  searchValueChange(): void {
    this.searchForm
      .get('search')
      ?.valueChanges.pipe(
        debounceTime(600),
        distinctUntilChanged(),
        switchMap((key) => {
          this.searchValue = key;
          this.isOpenDropDown = true;
          return this.searchService.getSearchedResult(this.searchValue);
        }),
      )
      .subscribe({
        next: (data: Post[]) => {
          this.searchedData = data;
        },
      });
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
