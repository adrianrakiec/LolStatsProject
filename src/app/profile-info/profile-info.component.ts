import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Summoner } from '../types/Summoner';

@Component({
	selector: 'app-profile-info',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './profile-info.component.html',
	styleUrl: './profile-info.component.css',
})
export class ProfileInfoComponent {
  @Input() profileInfo: Summoner | null = null;
}
