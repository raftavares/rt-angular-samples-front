import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rt-angular-samples-front');
   constructor(private http: HttpClient) {}

  openCalc() {
    // URL do seu endpoint no Spring Boot
    this.http.post('http://localhost:8080/api/v1/tools/calc', {}).subscribe({
      next: (res) => console.log('Sucesso! Calculadora disparada.', res),
      error: (err) => console.error('Erro de conexão ou CORS:', err)
    });
  }
}
