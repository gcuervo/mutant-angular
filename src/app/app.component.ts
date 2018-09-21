import { Component } from '@angular/core';
import { Dna } from './model/dna.model';
import { DnaService } from './service/dna.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DnaService]
})
export class AppComponent {
  title = 'app';

  constructor(private dnaService: DnaService) {}

  verifyDNA(dna: Dna) {

  }
}
