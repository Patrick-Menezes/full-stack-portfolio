import { Component } from '@angular/core';
import { Wellcome} from '../wellcome/wellcome';
import {Header} from'../header/header';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-page',
  imports: [Wellcome,Header,Skills,Projects,Contact,Footer],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class Page {}
