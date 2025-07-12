import { Component } from '@angular/core';
import { Blog } from './component/blog/blog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Blog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
