<script>
	import ProductDetails from '$lib/components/Product/ProductDetails.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<ProductDetails {data} />
