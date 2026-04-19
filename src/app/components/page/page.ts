import { Component } from '@angular/core';
import { Wellcome} from '../wellcome/wellcome';
import {Header} from'../header/header';
@Component({
  selector: 'app-page',
  imports: [Wellcome,Header],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class Page {}
