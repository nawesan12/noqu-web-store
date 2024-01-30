<script lang="ts">
	import Collection from '$lib/components/ProductCollection/Collection.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import AspectRatio from '$lib/components/ui/aspect-ratio/aspect-ratio.svelte';
	import FAQ from '$lib/components/FAQ/FAQ.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Menu from '$lib/components/Menu/Menu.svelte';
</script>

<Menu />
<main class="p-4 overflow-x-hidden">
	<h1
		class="m-8 lg:text-4xl lg:font-semibold lg:text-left text-4xl text-center font-bold flex justify-between items-center lg:px-8"
	>
		<span>Colecciones</span>

		<span
			><svg
				width="34"
				height="34"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="#000"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
				<path d="M4 12h8" />
				<path d="M12 15h8" />
				<path d="M12 9h8" />
				<path d="M12 4v16" />
			</svg></span
		>
	</h1>

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

	<Collection />

	<section class="quoteblock my-8 mb-24">
		<p class="font-bold text-balance block max-w-min lg:max-w-6xl mx-auto">
			Brave clothing for the bravest souls. Stay bold.
		</p>
	</section>

	<FAQ />

	<Footer />
</main>
