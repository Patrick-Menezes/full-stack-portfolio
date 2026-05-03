import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Page} from './components/page/page';
import { Minishop } from './projects/minishop/minishop';
import { OrderService } from './projects/order-service/order-service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Page,Minishop,OrderService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('full-stack-portfolio');
}
