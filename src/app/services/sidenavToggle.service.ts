import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SidenavToggleService {

    private sidenavToggleSubject = new BehaviorSubject(null);

    constructor() { }

    toggleSidenav() {
        this.sidenavToggleSubject.next(true);
    }

    getSidenavToggleBehavior() {
        return this.sidenavToggleSubject.asObservable();
    }
}