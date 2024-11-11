export type Product = {
	id?: number;
	name?: string;
	colors?: string[];
	price?: number;
	image?: string;
	lore?: string;
	collection?: string;
	fabric?: string;
	style?: string;
};

export type ProductForCart = Product & {
	selectedColor?: string;
	quantity?: number;
};

export type Collection = {
	id: string;
	name: string;
	published: boolean;
	products: Product[];
};
