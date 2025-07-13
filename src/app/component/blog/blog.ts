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
    title: 'Festivalero: este año no te vigilan (aún)… pero la IA ya se está preparando para verte en 4K',
    imageUrl: "https://images.unsplash.com/photo-1520600661691-801f48869ee4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: 'Benicàssim prepara un recinto de festivales “eco-digital” con placas solares, arquitectura bio y cámaras de vigilancia conectadas en tiempo real con la Policía Local. El sistema incluirá reconocimiento facial 4K, conteo de personas y detección de comportamientos “inusuales”. Lo llaman sostenibilidad, pero huele más a control solarizado. Aún no está instalado, pero lo tienen todo listo.<br><br>La pregunta incómoda es: ¿qué pasa si estás en el Rototom haciendo lo que se hace en el Rototom? Porque una cámara con IA podría detectar “demasiada felicidad”, o que miras una farola durante media hora, y lanzar una alerta directa a comisaría. No es broma: el sistema está diseñado para vigilar incluso si llevas camiseta roja y gafas de pasta.<br><br>Este sistema se aplicará a todos los festivales del recinto, desde el FIB hasta un mercadillo medieval. Aún no te están grabando, pero pronto podrían hacerlo, y tú ni enterarte. Si algún día existe un vídeo tuyo borracho, ligando o fumando... puede que tú no lo recuerdes. Pero la IA, y la policía, sí. Así que sonríe: estás en Benicàssim.',
    date: '2025-07-01'

  },
  {
    title: 'Benicàssim y la òpera de la meada: verano, 35 grados y algo huele en la nariz',
    imageUrl: "https://images.unsplash.com/photo-1561330496-d56b29ae9494?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: 'En verano, Benicàssim multiplica su población hasta cinco veces, y con ella llegan los perros, los paseos matutinos y las meadas masivas en cada esquina. A las 8 de la mañana, con 35 grados pegando fuerte, el pis fermentado decora las aceras como parte del paisaje costero. Resultado: un aroma matinal que no perdona ni al que baja a por pan.<br><br>El problema no son los perros, sino los humanos que olvidan la botella de agua con lejía y confunden el paseo con vía libre sin consecuencias. El ayuntamiento, mientras tanto, ni aparece con camiones de limpieza ni activa campañas reales: solo hay castillos iluminados y sanciones por sombrillas torcidas. Y el pis, a lo suyo, oxidándose al sol.<br><br>La solución es tan simple como barata, pero en Benicàssim parece que barrer el suelo cuesta más que montar un escenario. Así que, si madrugas en agosto, no esperes brisa marina: lo que llega es el perfume oficial de la temporada –“Meadas sin fronteras”–. Y sí, puedes cerrar la ventana… pero el olor se queda.',
    date: '2025-07-05'
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