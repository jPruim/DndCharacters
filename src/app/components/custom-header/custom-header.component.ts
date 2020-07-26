import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit {
  @Input()
  title: String;
  constructor() { }

  @Input()
  favoriting = false;

  @Input()//value
  favorited = false;

  @Input() //subject
  favorited$: BehaviorSubject<boolean> = null;

  ngOnInit() {
    // console.log(this.title);
    if (this.favoriting) {
      this.favorited$.subscribe(value => {
        this.favorited = value;
      });
    }
  }

  updateFavorite$() {
    if (this.favorited) {
      this.favorited$.next(false);
    } else {
      this.favorited$.next(true)
    }
  }
}
