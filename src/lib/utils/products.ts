import type { Collection } from '$lib/types/products';

export const getProductsByCollection = async (collectionId: string): Promise<Collection | null> => {
	const collections = await import(`../data/collections/${collectionId}`);
	return collections.default || null;
};
