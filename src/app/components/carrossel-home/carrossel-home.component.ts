import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Component, ViewChild } from '@angular/core';

enum SlideIndex {
  Slide1 = 0,
  Slide2 = 1,
  Slide3 = 2,
}

@Component({
  selector: 'app-carrossel-home',
  templateUrl: './carrossel-home.component.html',
  styleUrls: ['./carrossel-home.component.scss'],
})

export class CarrosselHomeComponent implements OnInit, OnDestroy {
  currentIndex: number = 0;
  interval: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Tempo de intervalo entre slides (em milissegundos)
  }

  stopCarousel() {
    clearInterval(this.interval);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % 3;
  }

  setSlide(index: number) {
    this.currentIndex = index;
    this.stopCarousel();
    this.startCarousel();
  }
}

