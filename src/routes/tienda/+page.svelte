<script lang="ts">
	import Collection from '$lib/components/ProductCollection/Collection.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Breadcrumb from '$lib/components/Product/UniqueProduct/Breadcrumb.svelte';
</script>

<main class="p-4 overflow-x-hidden">
	<Breadcrumb />

	<Carousel.Root>
		<Carousel.Content>
			<Carousel.Item>1</Carousel.Item>
			<Carousel.Item>2</Carousel.Item>
			<Carousel.Item>3</Carousel.Item>
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>

	<Collection />
</main>
