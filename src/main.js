import './style.css';
import { GameApp } from './game/GameApp.js';

const app = document.getElementById('app');
const game = new GameApp(app);
window.game = game;
