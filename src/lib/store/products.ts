import { writable } from 'svelte/store';
import type { Collection } from '$lib/types/products';

export const productsByCollection = writable<Record<string, Collection>>({});

export const loadProductsByCollection = async (collectionId: string) => {
	const module = await import(`../data/collections/${collectionId}.json`);
	productsByCollection.update((current) => {
		current[collectionId] = module.default;
		return current;
	});
};
