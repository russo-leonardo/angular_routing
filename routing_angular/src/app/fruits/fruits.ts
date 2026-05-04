import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-fruits',
  imports: [],
  templateUrl: './fruits.html',
  styleUrl: './fruits.css',
})
export class Fruits {fruits = [
    { name: 'Teffa7', emoji: '🍎' },
    { name: 'Limoun', emoji: '🍋' },
    { name: 'Della7', emoji: '🍉' },
    { name: 'Bnane', emoji: '🍌' },
    { name: '3neb', emoji: '🍇' },
    { name: 'Khokh', emoji: '🍑' },
    { name: 'Friz', emoji: '🍓' },
    { name: 'Ananas', emoji: '🍍' },
    { name: 'Kiwi', emoji: '🥝' },
    { name: 'Be3wid', emoji: '🍐' },
    { name: '7eb lmlouk', emoji: '🍒' },
    { name: 'Mangu', emoji: '🥭' }
  ];}
