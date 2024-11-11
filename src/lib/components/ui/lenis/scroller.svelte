<script lang="ts">
	import Lenis from 'lenis';
	import { onMount } from 'svelte';

	let wrapper: HTMLElement;
	let content: HTMLElement;

	onMount(() => {
		const lenis = new Lenis({
			wrapper: wrapper,
			content: content
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	});
</script>

<div bind:this={wrapper} style="overflow: hidden; height: 100vh;">
	<div bind:this={content} style="height: 200vh;">
		<slot />
	</div>
</div>
