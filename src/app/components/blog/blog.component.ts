import { Component, inject, OnInit } from '@angular/core';
import { BlogModel } from '../../shared/store/blog/blog.model';
import { Store } from '@ngrx/store';
import { getBlog } from '../../shared/store/blog/blog.selector';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { NgForOf } from '@angular/common';
import { AppStateModel } from '../../shared/store/global/app-state.model';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddblogComponent } from '../addblog/addblog.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    NgForOf,
    MatButton
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  private store = inject(Store<AppStateModel>);
  private dialog = inject(MatDialog);
  blogList!: BlogModel[];

  ngOnInit(): void {
    this.store.select(getBlog).subscribe(item => {
      this.blogList = item;
      console.log(this.blogList);
    });
  }

  addBlog() {
    this.openPopUp();
  }

  openPopUp() {
    this.dialog.open(AddblogComponent, {
      width: '40%'
    });
  }
}
