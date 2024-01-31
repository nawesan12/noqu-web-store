import { error } from '@sveltejs/kit';
import productos from '$lib/utils/products.json';

type Product = {
	id: number;
	name: string;
	price: number;
	image: string;
	colors: string[];
};

/** @type {import('./$types').PageLoad} */
export function load({ url, params }) {
	const decodedName = decodeURIComponent(params.product);
	const urlSearchParams = new URLSearchParams(url.search);

	const splitResult = decodedName.split('?');
	const nameWithoutQuery = splitResult[0].trim();

	const color = urlSearchParams.get('color') || null;

	const product = productos.find((e: Product) => e.name === nameWithoutQuery);

	if (product) {
		return {
			title: `${product.name} | Noqu137`,
			product: product,
			color: color
		};
	}

	error(404, 'Producto no encontrado');
}
