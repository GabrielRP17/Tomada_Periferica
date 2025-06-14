import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  images: string[] = [
    'assets/Imagens/Carousel/Poster_DezConto.jpg',
    'assets/Imagens/Carousel/Getulio_DoisConto.jpg',
    'assets/Imagens/Carousel/Franca_DoisConto.jpg'
  ];

  currentIndex: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Troca de slide a cada 3 segundos
  }

  stopAutoSlide(): void {
    clearInterval(this.intervalId);
  }
}
