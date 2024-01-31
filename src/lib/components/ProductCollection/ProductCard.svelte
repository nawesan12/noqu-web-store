<script lang="ts">
	import AddToCartFromCard from './AddToCartFromCard.svelte';

	export let image: string;
	export let name: string;
	export let colors: string[];
	export let price: number;

	let selectedColor = colors[0];
</script>

<article class="relative group block">
	<AddToCartFromCard product={{ image, name, selectedColor, price }} />
	<a href={`/${name}?color=${selectedColor}`}>
		<img src={image} alt="" class="h-[350px] w-full object-cover sm:h-[450px]" />
	</a>

	<div class="mt-1.5">
		<p class="text-xs capitalize font-semibold text-black">{selectedColor}</p>

		<div class="mt-1.5 flex gap-1">
			<section>
				<fieldset>
					<legend class="sr-only">Color</legend>
				</fieldset>

				<ul class="flex flex-wrap justify-center gap-4 [&:hover_label]:opacity-75">
					<!---->
					{#each colors as color}
						<li>
							<button on:click={() => (selectedColor = color)}>
								<input type="checkbox" id="ColorSg" class="sr-only" />

								<label
									for="ColorSg"
									class="block h-4 w-4 border border-black cursor-pointer rounded-full bg-{color} transition hover:!opacity-100"
								>
									<span class="sr-only"> {color} </span>
								</label>
							</button>
						</li>
					{/each}
				</ul>
			</section>
		</div>

		<a href="/producto">
			<div class="mt-3 flex justify-between text-sm">
				<h3 class="text-black hover:underline group-hover:underline-offset-4">
					{name}
				</h3>

				<p class="text-black">${price}</p>
			</div>
		</a>
	</div>
</article>
