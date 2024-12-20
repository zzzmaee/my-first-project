import { createReducer, on } from '@ngrx/store';
import { blogState } from './blog.state';
import * as BlogActions from './blog.actions';

export const _blogReducer = createReducer(
  blogState,

  on(BlogActions.loadBlog, (state) => {
    return {
      ...state,
    };
  }),

  on(BlogActions.addBlog, (state, action) => {
    const _blog = {...action.blogInput};
    _blog.id = state.blogList.length+1;
    return {
      ...state,
      blogList: [...state.blogList, _blog]
    };
  })
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
