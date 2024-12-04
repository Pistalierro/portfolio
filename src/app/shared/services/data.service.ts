import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, doc, docData, Firestore} from '@angular/fire/firestore';
import {Observable, Observer} from 'rxjs';
import {ProjectInterface} from '../types/project.interface';
import {SkillInterface} from '../types/skills.interface';
import {FeedbackInterface} from '../types/feedback.interface';

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

  addFeedbackMessages(msg: FeedbackInterface): Observable<void> {
    const messagesCollection = collection(this.firestore, 'messages');
    return new Observable<void>((observer: Observer<void>) => {
      addDoc(messagesCollection, msg)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => observer.error(error));
    });
  }
}
