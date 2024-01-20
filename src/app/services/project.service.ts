import { AboutComponent } from './../modules/about/about.component';
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  arrProjects: Project[] = [];
  constructor() {
    this.arrProjects = [
      {
        title: 'SGAL Construciones',
        image: 'assets/images/sgalimagen.png',
        description: 'App de gestión para constructora, contiene un CRUD completo dónde puedes dar de alta trabajadores, obras y tareas, asi como borrarlas y modificarlas .',
        tecnologies: 'Angular, NodeJs, Express, TypeScript, MySQL',
        link: 'https://github.com/Guillle912/back_constructora'
      },
      {
        title: 'FofyConsolas',
        image: 'assets/images/fofyconsolas.jpg',
        description: 'Blog inspirado en una página de videojuegos dónde se pueden crear, modificar y borrar posts. Realizado con Angular. ',
        tecnologies: 'Angular, TypeScript, Bootstrap',
        link: 'https://github.com/Guillle912/practica_fangular_blog_guille'
      },
      {
        title: 'Heroes App',
        image: 'assets/images/heroesapp.jpg',
        description: 'CRUD de una web de heroes realizado con Angular y Material, el backend esta consumiendo un JSON server local.',
        tecnologies: 'Angular, TypeScript, Angular Material',
        link: 'https://github.com/Guillle912/HeroesApp'
      },
      {
        title: 'Gifs App',
        image: 'assets/images/gifs.jpg',
        description: 'App de busqueda de Gifs hecha con Angular, donde practiqué el consumo de API y hacer persistencia de busqueda.',
        tecnologies: 'Angular, Bootstrap, TypeScript',
        link: 'https://github.com/Guillle912/GifsApp'
      },
      {
        title: 'BlackJack',
        image: 'assets/images/blacjack.jpg',
        description: 'Mi primer proyecto, realizado con JavaScript Vanilla, usando Vite y Bootstrap.',
        tecnologies: 'JavaScript, Bootstrap',
        link: 'https://github.com/Guillle912/vite-app-blackjack'
      },
      {
        title: 'TodoList',
        image: 'assets/images/todolist.jpg',
        description: 'Proyecto realizado completamente con JavaScript vanilla, utilizé ViteJs para utilizar una arquitectura con la que poder trabajar con imports.',
        tecnologies: 'JavaScript',
        link: 'https://github.com/Guillle912/TodoList'
      },
      {
        title: 'Paises App',
        image: 'assets/images/PaisesApp.jpg',
        description: 'App hecha con Angular, dónde consumo una API con varios EndPoints y pongo en práctica una barra de busqueda dinámica.',
        tecnologies: 'Angular, Bootstrap, TypeScript',
        link: 'https://github.com/Guillle912/CountrySPA'
      },
      {
        title: 'Ricky & Morty',
        image: 'assets/images/rickymorty.jpg',
        description: 'Página para practicar el consumo de una API, hacer su paginado y detalle según su ID',
        tecnologies: 'Angular, TypeScript, Bootstrap',
        link: 'https://github.com/Guillle912/Rick-MortyApp'
      },
    ];
  }

  getAllProjects(){
    return this.arrProjects
  }

  modoOscuro = false;

  toggleModo() {
    this.modoOscuro = !this.modoOscuro;
    document.body.classList.toggle('light-mode', this.modoOscuro)
  }
}
