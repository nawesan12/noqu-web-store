<script lang="ts">
	import { onMount } from 'svelte';

	let visible = false;

	function typewriter(node: any) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (1 * 0.01);

		return {
			duration,
			tick: (t: number) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

	onMount(() => {
		visible = true;
	});
</script>

<section class="">
	<div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
		<div class="mx-auto max-w-3xl text-center">
			<h1
				class="trispace font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl text-transparent sm:text-5xl"
			>
				Noqu137 <br />

				{#if visible}
					<p transition:typewriter class="sm:block whitespace-nowrap text-xl">Cosmic Connection</p>
				{/if}
			</h1>

			<div class="mt-8 flex flex-wrap justify-center gap-4">
				<a
					class="block w-full max-w-max rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-purple-700 transition duration-200 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
					href="/tienda"
				>
					Ver tienda
				</a>
			</div>
		</div>
	</div>
</section>
