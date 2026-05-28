import green from './green.jpg';
import pink from './pink.jpg';
import leopard from './leopard.jpg';
import polkaDot from './polka-dot.jpg';

type Background = {
    id: string;
    name: string;
    src: string;
}

export const backgrounds: Background[] = [
    { id: 'black', name: 'Black', src: '' },
    { id: 'green_aura', name: 'Green Aura', src: green },
    { id: 'pink_aura', name: 'Pink Aura', src: pink },
    { id: 'leopard', name: 'Leopard Print', src: leopard },
    { id: 'polka_dots', name: 'Polka dots', src: polkaDot },
];

type Font = {
    id: string;
    name: string;
    fontFamily: string;
    fontSize: number;
    fontSizeMax: number;
}

export const fonts : Font[] = [
    { id: 'pixel', name: 'Pixel', fontFamily: '"Press Start 2P"', fontSize: 12, fontSizeMax: 176 },
    { id: 'default', name: 'Strong', fontFamily: '"Verdana"', fontSize: 15, fontSizeMax: 264},
    { id: 'bagel_fat_one', name: 'Cute', fontFamily: '"Bagel Fat One"', fontSize: 15, fontSizeMax: 264 },
    { id: 'mali', name: 'Soft', fontFamily: '"Mali"', fontSize: 15, fontSizeMax: 304 },
];