import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Product {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  page = signal('products');

  products: Product[] = [
    { id: '1', name: 'Café 1', description: 'Café extra forte' },
    { id: '2', name: 'Café 2', description: 'Café aromatizado' },
    { id: '3', name: 'Café 3', description: 'Café arábido' },
    { id: '4', name: 'Café 4', description: 'Café descafeinado' },
    { id: '5', name: 'Café 5', description: 'Café gourmet' },
    { id: '6', name: 'Café 6', description: 'Café orgânico' },
  ]

  cart: Product[] = [];

  adicionarCarrinho(product: Product) {
    this.cart.push(product);
  }

  removerCarrinho(index: number) {
    this.cart.splice(index, 1);
  }

  irPara(proxima: string) {
    this.page.set(proxima);
  }

}