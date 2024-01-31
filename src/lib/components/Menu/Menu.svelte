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
			width="34"
			height="34"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="#2c3e50"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path
				d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"
			/>
			<path d="M9 11v-5a3 3 0 0 1 6 0v5" />
		</svg>
	</Sidebar>
</menu>
