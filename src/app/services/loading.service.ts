import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LoadingService {
	private loadingSubject: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	public isLoading$: Observable<boolean> = this.loadingSubject.asObservable();

	private errorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
		false
	);
	public isError$: Observable<boolean> = this.errorSubject.asObservable();

	startLoading() {
		this.loadingSubject.next(true);
	}

	stopLoading() {
		this.loadingSubject.next(false);
	}

	setError() {
		this.errorSubject.next(true);
	}

	clearError() {
		this.errorSubject.next(false);
	}
}
