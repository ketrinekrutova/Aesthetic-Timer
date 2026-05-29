import black from './black.jpg';
import green from './green.jpg';
import pink from './pink.jpg';
import leopard from './leopard.jpg';
import polkaDot from './polka-dot.jpeg';
import plain from './plain.jpg';
import refraction from './refraction.jpg';
import sea from './sea.jpg';

type Background = {
    id: string;
    name: string;
    src: string;
}

export const backgrounds: Background[] = [
    { id: 'black', name: 'Black', src: black },
    { id: 'green_aura', name: 'Green Aura', src: green },
    { id: 'pink_aura', name: 'Pink Aura', src: pink },
    { id: 'leopard', name: 'Leopard Print', src: leopard },
    { id: 'polka_dots', name: 'Polka dots', src: polkaDot },
    { id: 'plain', name: 'Plain', src: plain },
    { id: 'refraction', name: 'Refraction', src: refraction },
    { id: 'sea', name: 'Sea', src: sea },
];

type Font = {
    id: string;
    name: string;
    fontFamily: string;
    fontSize: number;
    fontSizeMax: number;
    letterSpacing: string;
}

export const fonts : Font[] = [
    { id: 'pixel', name: 'Pixel', fontFamily: '"Press Start 2P"', fontSize: 12, fontSizeMax: 176, letterSpacing: '-0.05em' },
    { id: 'default', name: 'Strong', fontFamily: '"Verdana"', fontSize: 15, fontSizeMax: 264, letterSpacing: '-0.05em' },
    { id: 'bagel_fat_one', name: 'Cute', fontFamily: '"Bagel Fat One"', fontSize: 15, fontSizeMax: 264, letterSpacing: '0.02em' },
    { id: 'mali', name: 'Soft', fontFamily: '"Mali"', fontSize: 15, fontSizeMax: 304, letterSpacing: '0.01em' },
];