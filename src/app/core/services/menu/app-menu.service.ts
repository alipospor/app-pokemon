import { Injectable } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class AppMenuService {

  private itensMenuP: PoMenuItem[] = [];
  private deveApresentarMenuP = false;

  get itensMenu(): PoMenuItem[] {
    return this.itensMenuP;
  }

  public get deveApresentarMenu(): boolean {
    return this.deveApresentarMenuP;
  }

  constructor() {
    this.definirItensMenu();
  }

  public esconderMenu(): void {
    this.deveApresentarMenuP = false;
  }

  public apresentarMenu(): void {
    this.deveApresentarMenuP = true;
  }

  private definirItensMenu(): void {
    this.itensMenuP = [
      {
        label: 'inicio',
        shortLabel: 'inicio',
        link: '/inicio',
        icon: 'po-icon-home'
      },
      {
        label: 'Pokemons',
        shortLabel: 'Pokemons',
        link: '/listagem',
        icon: 'po-icon-list'
      }
    ];
  }
}
