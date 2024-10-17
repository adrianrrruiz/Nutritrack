import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentPage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Suscribirse a los eventos de navegación para detectar cambios en la ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateCurrentPage(event.urlAfterRedirects);
      }
    });
  }

updateCurrentPage(url: string): void {
  console.log('Ruta actual:', url); // Verifica en la consola la ruta actual
  switch (url) {
      case '/inicio':
        this.currentPage = 'Página de Inicio';
        break;
      case '/registros':
        this.currentPage = 'Página de Registros';
        break;
      case '/agregar':
        this.currentPage = 'Página de Agregar';
        break;
      case '/perfil':
        this.currentPage = 'Página de Perfil';
        break;
      case '/ideas':
        this.currentPage = 'Ideas Activas';
        break;
      case '/retos':
        this.currentPage = 'Retos Activos';
        break;
      case '/idea-nueva':
        this.currentPage = 'Nueva Idea';
        break;
      case '/reto-nuevo':
        this.currentPage = 'Nuevo Reto';
        break;
        case '/idea-details':
        this.currentPage = 'Detalles de la Idea';
        break;
      default:
        this.currentPage = 'Página Desconocida';
    }
  }  
}  