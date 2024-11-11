import { writable } from 'svelte/store';
import type { Product, ProductForCart } from '$lib/types/products';

export const globalCart = writable<ProductForCart[]>([]);

export const addToCart = (product: Product, color: string) => {
	globalCart.update((cart) => {
		const existingItemIndex = cart.findIndex(
			(item) => item.name === product.name && item.selectedColor === color
		);

		if (existingItemIndex >= 0) {
			cart[existingItemIndex].quantity += 1;
		} else {
			cart.push({
				name: product.name,
				selectedColor: color,
				image: product.image,
				price: product.price,
				quantity: 1
			});
		}

		return cart;
	});
};

export const removeFromCart = (productName: string, color: string) => {
	globalCart.update((cart) => {
		return cart.filter((item) => !(item.name === productName && item.selectedColor === color));
	});
};

export const updateCartQuantity = (productName: string, color: string, quantity: number) => {
	globalCart.update((cart) => {
		const itemIndex = cart.findIndex(
			(item) => item.name === productName && item.selectedColor === color
		);

		if (itemIndex >= 0) {
			cart[itemIndex].quantity = quantity;
			if (cart[itemIndex].quantity <= 0) {
				cart.splice(itemIndex, 1);
			}
		}

		return cart;
	});
};
