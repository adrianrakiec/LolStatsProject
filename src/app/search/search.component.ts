import { Component } from '@angular/core';
import { RiotApiService } from '../riot-api.service';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {
  constructor(private riotService: RiotApiService) {}

  getData(region: string, username: string) {
    this.riotService.getProfileData(region, username).subscribe(
      data => console.log(data)
    )
  }
}
