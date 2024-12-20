import { Component, inject } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogModel } from '../../shared/store/blog/blog.model';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../shared/store/global/app-state.model';
import { addBlog } from '../../shared/store/blog/blog.actions';

@Component({
  selector: 'app-addblog',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css'
})
export class AddblogComponent {
  private dialogRef = inject(MatDialogRef<AddblogComponent>);
  private fb = inject(FormBuilder);
  private store = inject(Store<AppStateModel>);

  closePopUp() {
    this.dialogRef.close();
  }

  blogForm = this.fb.group({
    id: [0],
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  saveBlogs() {
    if (this.blogForm.valid) {
      const _blogInput: BlogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string
      };
      this.store.dispatch(addBlog({blogInput: _blogInput}));
      this.closePopUp();
    }
  }
}
