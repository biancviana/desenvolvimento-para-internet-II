import { Component } from '@angular/core';
interface Imoveis {
  id: number;
  foto: string;
  titulo: string;
  descricao: string;
  detalhes: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  casa: Imoveis[] = [
    {
      id: 1,
      foto: '/images/casa1.png',
      titulo: 'Casa Condominio Laranjeiras',
      descricao: 'Casa com 3 quartos, 2 banheiros e área gourmet',
      detalhes: 'Proxima do objetivo e do Parque ecológico'
    },
    {
      id: 2,
      foto: '/images/casa2.png',
      titulo: 'Casa Condominio Montreal',
      descricao: 'Casa com 3 quartos, 2 banheiros e área gourmet',
      detalhes: 'Proxima do centro da cidade'
    },
    {
      id: 3,
      foto: '/images/casa3.png',
      titulo: 'Casa Condominio Vila Rica',
      descricao: 'Casa com 4 quartos, 1 lavabo, 2 banheiros e área gourmet',
      detalhes: 'Proxima do Alphaville'
    },
  ];
  maisDetalhes(descritivo: Imoveis) {
    alert(`Imóvel: ${descritivo.titulo} \nDescrição: ${descritivo.descricao}`);
  }
}