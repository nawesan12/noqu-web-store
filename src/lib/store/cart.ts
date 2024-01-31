import { writable } from 'svelte/store';

type ProductForCart = { name: string; selectedColor: string; image: string; price: number };

export const globalCart = writable([] as ProductForCart[]);
