<script lang="ts">
	export let colors: string[];
	export let defaultColor: string;
</script>

<section class="flex gap-2">
	<span class="mr-3">Color</span>
	{#each colors as color}
		<button
			on:click={() => (defaultColor = color)}
			class="bg-{color} color border-2 outline border-black rounded-full w-6 h-6"
		></button>
	{/each}
</section>
