import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-loading-buttons-playground';
  loading = false;

  click(): void {
    this.loading = true;
  }
}
