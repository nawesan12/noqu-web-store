<script lang="ts">
	import type { Product } from '$lib/types/products';
	import AddToCart from './UniqueProduct/AddToCart.svelte';
	import AddToFavorites from './UniqueProduct/AddToFavorites.svelte';
	import Breadcrumb from './UniqueProduct/Breadcrumb.svelte';
	import ColorSelect from './UniqueProduct/ColorSelect.svelte';
	import Description from './UniqueProduct/Description.svelte';
	import Details from './UniqueProduct/Details.svelte';
	import Price from './UniqueProduct/Price.svelte';
	import ProductImage from './UniqueProduct/ProductImage.svelte';
	import SelectSize from './UniqueProduct/SelectSize.svelte';
	import Title from './UniqueProduct/Title.svelte';

	export let data: { title: string; color: string; product: Product };
</script>

<section class="text-gray-700 body-font overflow-hidden">
	<div class="container px-5 mb-12 mx-auto">
		<Breadcrumb name={data.product.name} />
		<div class="lg:w-4/5 mx-auto flex flex-wrap">
			<ProductImage image={data.product.image} />
			<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
				<Title name={data.product.name} />
				<Description lore={''} />

				<div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
					<ColorSelect colors={data.product.colors} defaultColor={data.color} />
					<div class="flex ml-6 items-center">
						<SelectSize />
					</div>
				</div>
				<footer class="flex">
					<Price price={data.product.price} />
					<AddToCart product={data.product} color={data.color} />
					<AddToFavorites />
				</footer>
			</div>
		</div>
	</div>
</section>

<Details />
