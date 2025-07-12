import { Component } from '@angular/core';
import { INews } from '../../interfaces/inews.interface';


@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
newsList: INews[] = [
  {
    title: 'Titulo noticia 1',
    imageUrl: "https://placehold.co/600x300",
    text: 'texto de la noticia 1',
    date: '2025-07-01'
  },
  {
    title: 'Titulo noticia 2',
    imageUrl: "https://placehold.co/600x300",
    text: 'texto de la noticia 2',
    date: '2025-07-05'
  }
];

}
