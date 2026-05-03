import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Page} from './components/page/page';
import { Minishop } from './projects/minishop/minishop';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Page,Minishop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('full-stack-portfolio');
}
