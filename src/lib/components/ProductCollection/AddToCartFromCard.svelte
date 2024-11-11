<script lang="ts">
	import { addToCart } from '$lib/store/cart';
	import type { ProductForCart } from '$lib/types/products';
	import { toast } from 'svelte-sonner';

	export let product: ProductForCart;
</script>

<button
	class="absolute size-8 hover:bg-white font-bold hover:text-black hover:invert transition hover:border-2 border-black duration-200 z-10 top-4 right-4 bg-black rounded-lg text-white"
	on:click={() => {
		toast('Agregado al carrito!', {
			description: `${product.name}`,
			action: {
				label: '❤',
				onClick: () => {}
			}
		});
		addToCart(product, product.selectedColor);
	}}
>
	+
</button>
