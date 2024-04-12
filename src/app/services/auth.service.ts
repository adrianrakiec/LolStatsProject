import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isNavigationInitiatedByButton: boolean = false;

  constructor() {}

  setBtnClicked(value: boolean) {
    this.isNavigationInitiatedByButton = value;
  }

  isBtnClicked(): boolean {
    return this.isNavigationInitiatedByButton;
  }
}
