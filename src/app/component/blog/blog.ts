import { Component } from '@angular/core';
import { INews } from '../../interfaces/inews.interface';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
    newPost: INews = {
    title: '',
    imageUrl: '',
    text: '',
    date: ''
  };
newsList: INews[] = [
  {
    title: 'Titulo noticia 2',
    imageUrl: "https://placehold.co/600x300",
    text: 'texto de la noticia 2',
    date: '2025-07-05'
  },
  {
    title: 'Titulo noticia 1',
    imageUrl: "https://placehold.co/600x300",
    text: 'texto de la noticia 1',
    date: '2025-07-01'
  }
];
addPost(eventoFormulario: Event) {
  eventoFormulario.preventDefault();

  if (
    !this.newPost.title.trim() ||
    !this.newPost.imageUrl.trim() ||
    !this.newPost.text.trim() ||
    !this.newPost.date.trim()
  ) {
    alert('Por favor, completa todos los campos antes de publicar.');
    return;
  }

this.newsList.unshift({ ...this.newPost });

  this.newPost = {
    title: '',
    imageUrl: '',
    text: '',
    date: ''
  };
}
}