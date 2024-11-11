<script lang="ts">
	import Collection from '$lib/components/ProductCollection/Collection.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import AspectRatio from '$lib/components/ui/aspect-ratio/aspect-ratio.svelte';
	import FAQ from '$lib/components/FAQ/FAQ.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Menu from '$lib/components/Menu/Menu.svelte';

	import collections from '$lib/data/collections/data.json';
</script>

<Menu />
<main class="p-4 overflow-x-hidden">
	<Carousel.Root>
		<Carousel.Content>
			<Carousel.Item>
				<AspectRatio ratio={16 / 9} class="bg-muted">
					<img
						src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</AspectRatio>
			</Carousel.Item>
			<Carousel.Item>
				<AspectRatio ratio={16 / 9} class="bg-muted">
					<img
						src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</AspectRatio>
			</Carousel.Item>
			<Carousel.Item>
				<AspectRatio ratio={16 / 9} class="bg-muted">
					<img
						src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</AspectRatio>
			</Carousel.Item>
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>

	{#each collections as collection}
		<Collection {collection} />
	{/each}

	<section class="quoteblock my-8 mb-24">
		<p class="font-bold text-balance block max-w-min lg:max-w-6xl mx-auto">
			Brave clothing for the bravest souls. Stay bold.
		</p>
	</section>

	<FAQ />

	<Footer />
</main>
