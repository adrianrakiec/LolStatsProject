import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingService } from './services/loading.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
	constructor(private loadingService: LoadingService) {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		this.loadingService.startLoading();

		return next.handle(request).pipe(
			tap({
				next: event => {
					if (event instanceof HttpResponse && event.ok) {
						this.loadingService.clearError();
					}
				},
				error: () => {
					this.loadingService.setError();
				},
				finalize: () => this.loadingService.stopLoading(),
			})
		);
	}
}
