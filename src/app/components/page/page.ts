import { Component } from '@angular/core';
import { Wellcome} from '../wellcome/wellcome';
import {Header} from'../header/header';
import { Skills } from '../skills/skills';
@Component({
  selector: 'app-page',
  imports: [Wellcome,Header,Skills],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class Page {}
