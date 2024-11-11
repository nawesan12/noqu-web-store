<script lang="ts">
	import ProductDetails from '$lib/components/Product/ProductDetails.svelte';
	import type { Product } from '$lib/types/products';

	/** @type {import('./$types').PageData} */
	export let data: Product;
</script>

<ProductDetails {data} />
