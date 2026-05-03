import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-order-service',
  imports: [Header, Footer, RouterLink],
  templateUrl: './order-service.html',
  styleUrl: './order-service.css',
})
export class OrderService {}
