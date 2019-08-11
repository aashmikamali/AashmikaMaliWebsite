import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class FsService {
  private _pageCount = new BehaviorSubject<number>(0);
  count$ = this._pageCount.asObservable();
  af: any;

  incrementPageCount(){
    const pageCount = this.af.object('/pageCount/').$ref
      .ref.transaction(count => {
        return count + 1;
      }).then((data) => {return data.snapshot.node_.value_;});

    return pageCount;
  }
  constructor() { }
}
