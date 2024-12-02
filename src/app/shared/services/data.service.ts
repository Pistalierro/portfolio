import {inject, Injectable} from '@angular/core';
import {collection, collectionData, doc, docData, Firestore} from '@angular/fire/firestore';
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

  getProjectById(id: string): Observable<ProjectInterface> {
    const docRef = doc(this.firestore, `projectList/${id}`);
    return docData(docRef, {idField: 'id'}) as Observable<ProjectInterface>;
  }
}
