import {inject, Injectable} from '@angular/core';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {ProjectInterface} from '../types/project.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private firestore = inject(Firestore);

  getProjectList(collectionName: string): Observable<ProjectInterface[]> {
    const colRf = collection(this.firestore, collectionName);
    return collectionData(colRf, {idField: 'id'}) as Observable<ProjectInterface[]>;
  }
}
