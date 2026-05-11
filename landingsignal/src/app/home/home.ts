import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Imoveis {
  id: number;
  foto: string;
  titulo: string;
  descricao: string;
  detalhes: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home implements OnInit {
  imoveis = signal<Imoveis[]>([]);

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get<Imoveis[]>('/data/dados.json').subscribe(data => {
      this.imoveis.set(data ?? []);
    });
  }
  maisDetalhes(item: Imoveis) {
    alert(`Imóvel: ${item.titulo}\nDescrição: ${item.descricao}`);
  }
}
