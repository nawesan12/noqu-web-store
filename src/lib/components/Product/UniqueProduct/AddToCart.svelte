<script>
	import { addToCart } from '$lib/store/cart';
	import { toast } from 'svelte-sonner';

	export let product;
	export let color;
</script>

<button
	class="flex ml-auto text-white bg-slate-900 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
	on:click={() => {
		toast('Agregado al carrito!', {
			description: `${name}`,
			action: {
				label: '❤',
				onClick: () => {}
			}
		});
		addToCart(product, color);
	}}
>
	Agregar al carrito
</button>
