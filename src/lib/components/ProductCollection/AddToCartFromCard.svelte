<script lang="ts">
	import { globalCart } from '$lib/store/cart.js';
	import { toast } from 'svelte-sonner';

	type ProductForCart = { name: string; selectedColor: string; image: string; price: number };

	function addToCart(item: ProductForCart) {
		$globalCart.push(item);
	}

	export let product: ProductForCart;
</script>

<button
	class="absolute hover:brightness-125 hover:invert transition duration-200 z-10 top-4 right-4 bg-black rounded-full p-1"
	on:click={() => {
		toast('Producto agregado al carrito', {
			description: `${product.name}`,
			action: {
				label: '<3',
				onClick: () => console.log('Ver carrito')
			}
		});
		addToCart(product);
	}}
>
	<svg
		width="8"
		height="8"
		viewBox="0 0 24 24"
		stroke-width="1"
		stroke="#fff"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path
			d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"
		/>
		<path d="M9 11v-5a3 3 0 0 1 6 0v5" />
	</svg></button
>
