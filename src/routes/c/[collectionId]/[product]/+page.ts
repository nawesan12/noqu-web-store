import { error } from '@sveltejs/kit';
import data from '$lib/data/collections/data.json';

type Product = {
	id: number;
	name: string;
	price: number;
	image: string;
	colors: string[];
};

/** @type {import('./$types').PageLoad} */
export async function load({ url, params }) {
	const { collectionId, product } = params;
	const decodedName = decodeURIComponent(product);
	const urlSearchParams = new URLSearchParams(url.search);

	const splitResult = decodedName.split('?');
	const nameWithoutQuery = splitResult[0].trim();

	const color = urlSearchParams.get('color') || null;

	console.log(nameWithoutQuery);

	const productData = data
		.find((e) => e.name === collectionId)
		?.products.find((e: Product) => e.name === nameWithoutQuery);

	if (productData) {
		return {
			title: `${productData.name} | Noqu137`,
			product: productData,
			color: color
		};
	}

	throw error(404, 'Producto no encontrado');
}
