import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
@Component({
  selector: 'app-minishop',
  imports: [Header, Footer, RouterLink],
  templateUrl: './minishop.html',
  styleUrl: './minishop.css',
})
export class Minishop {}
