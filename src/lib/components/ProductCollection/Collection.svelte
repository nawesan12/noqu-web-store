<script lang="ts">
	import type { Collection } from '$lib/types/products';
	import ProductCard from './ProductCard.svelte';

	export let collection: Collection;
</script>

<section>
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
		<header class="text-center">
			<h2 class="text-4xl font-bold text-black">{collection.name}</h2>

			<p class="mx-auto mt-4 max-w-md text-black opacity-70">
				{#if collection.published}
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
					dicta incidunt est ipsam, officia dolor fugit natus?
				{:else}
					Coming soon
				{/if}
			</p>
		</header>

		<ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each collection.products as product}
				<li>
					<ProductCard
						name={product.name}
						image={product.image}
						colors={product.colors}
						price={product.price}
						collection={collection.name}
					/>
				</li>
			{/each}
		</ul>
	</div>
</section>
