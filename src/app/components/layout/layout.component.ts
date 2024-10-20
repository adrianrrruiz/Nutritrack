import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-fw pi-home',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Registros',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Ideas Activas',
                        icon: 'pi pi-fw pi-star'
                    },
                    {
                        label: 'Retos Activos',
                        icon: 'pi pi-fw pi-star'
                    }
                ]
            },
            {
                label: 'Agregar',
                icon: 'pi pi-fw pi-plus-circle',
                items: [
                    {
                        label: 'Idea Nueva',
                        icon: 'pi pi-fw pi-check-circle'
                    },
                    {
                        label: 'Reto Nuevo',
                        icon: 'pi pi-fw pi-check-circle'
                    },
                ]
            },
        ];
    }
}
