import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

import { AppMenuService } from './core/services/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get itensMenu(): PoMenuItem[] {
    return this.menuAplicacao.itensMenu;
  }

  get deveApresentarMenu(): boolean {
    return this.menuAplicacao.deveApresentarMenu;
  }

  constructor(private readonly menuAplicacao: AppMenuService) { }

}
