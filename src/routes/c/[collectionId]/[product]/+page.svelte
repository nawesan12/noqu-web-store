<script lang="ts">
	import ProductDetails from '$lib/components/Product/ProductDetails.svelte';
	import type { Product } from '$lib/types/products';

	/** @type {import('./$types').PageData} */
	export let data: { title: string; color: string; product: Product };
</script>

<ProductDetails {data} />
