<script lang="ts">
	import Sidebar from '../Sidebar/Sidebar.svelte';
	import * as Avatar from '../ui/avatar';
	import * as HoverCard from '../ui/hover-card';
</script>

<menu
	class="h-max lg:px-8 lg:max-w-xl mx-auto p-4 shadow-sm shadow-zinc-100 flex justify-between items-center"
>
	<HoverCard.Root>
		<HoverCard.Trigger href="/disenos" target="_blank" rel="noreferrer noopener">
			<h1 class="font-bold trispace">Noqu</h1>
		</HoverCard.Trigger>
		<HoverCard.Content class="min-w-min">
			<div class="flex items-center justify-between space-x-4">
				<Avatar.Root>
					<Avatar.Image src="/favicon.png" />
					<Avatar.Fallback>SK</Avatar.Fallback>
				</Avatar.Root>
				<div class="space-y-1">
					<h4 class="text-sm font-semibold">Noqu</h4>
					<p class="text-sm space-mono-regular">Nuanced Originals, Quality Unmatched</p>
					<div class="flex items-center pt-2">
						<span class="text-xs text-muted-foreground">Since 2024</span>
					</div>
				</div>
			</div>
		</HoverCard.Content>
	</HoverCard.Root>

	<Sidebar>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x-bind:width="size"
			x-bind:height="size"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			x-bind:stroke-width="stroke"
			stroke-linecap="round"
			stroke-linejoin="round"
			width="24"
			height="24"
			stroke-width="2"
		>
			<path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
			<path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
			<path d="M17 17h-11v-14h-2"></path>
			<path d="M6 5l14 1l-1 7h-13"></path>
		</svg>
	</Sidebar>
</menu>
