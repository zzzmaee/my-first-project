import { CounterModel } from '../counter/counter.model';
import { Blogs } from '../blog/blog.model';

export interface AppStateModel{
  counter: CounterModel,
  blog: Blogs
}
