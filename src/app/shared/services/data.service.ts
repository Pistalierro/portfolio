import {inject, Injectable} from '@angular/core';
import {collection, collectionData, doc, docData, Firestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {ProjectInterface} from '../types/project.interface';
import {SkillInterface} from '../types/skills.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private firestore = inject(Firestore);

  getProjectList(): Observable<ProjectInterface[]> {
    const colRf = collection(this.firestore, 'projectList');
    return collectionData(colRf, {idField: 'id'}) as Observable<ProjectInterface[]>;
  }

  getProjectById(id: string): Observable<ProjectInterface> {
    const docRef = doc(this.firestore, `projectList/${id}`);
    return docData(docRef, {idField: 'id'}) as Observable<ProjectInterface>;
  }

  getSkills(): Observable<SkillInterface[]> {
    const colRf = collection(this.firestore, 'skills');
    return collectionData(colRf, {idField: 'id'}) as Observable<SkillInterface[]>;
  }
}
