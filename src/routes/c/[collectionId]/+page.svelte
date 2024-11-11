<script lang="ts">
	import { productsByCollection, loadProductsByCollection } from '$lib/store/products';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	export let params: { collectionId: string };
	let collection: any = null;

	onMount(async () => {
		await loadProductsByCollection(params.collectionId);
		collection = get(productsByCollection)[params.collectionId];
	});
</script>

<h1>Collection: {collection?.name}</h1>

{#if collection}
	<ul>
		{#each collection.products as product}
			<li><a href={`/colecciones/${params.collectionId}/${product.id}`}>{product.name}</a></li>
		{/each}
	</ul>
{:else}
	<p>Loading...</p>
{/if}
