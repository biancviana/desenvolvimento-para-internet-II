import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  imoveis: Imoveis[] = [];
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.http.get<Imoveis[]>('/data/dados.json').subscribe(data => {
      this.imoveis = data ?? [];
      this.cdr.detectChanges();
    });
  }
  maisDetalhes(item: Imoveis) {
    alert(`Imóvel: ${item.titulo}\nDescrição: ${item.descricao}`);
  }
}
