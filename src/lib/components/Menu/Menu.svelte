<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
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

	<Sheet.Root>
		<Sheet.Trigger>
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
		</Sheet.Trigger>
		<Sheet.Content>
			<Sheet.Header>
				<Sheet.Title>Carrito</Sheet.Title>
				<Sheet.Description>Linda eleccion, eh</Sheet.Description>
			</Sheet.Header>

			<ul class=" mt-4 space-y-4">
				<li class="flex items-center gap-4">
					<img
						src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
						alt=""
						class="h-16 w-16 rounded object-cover"
					/>

					<div>
						<h3 class="text-sm text-gray-900">Hito | Boxy Tee</h3>

						<dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
							<div>
								<dt class="inline">Size:</dt>
								<dd class="inline">L</dd>
							</div>

							<div>
								<dt class="inline">Color:</dt>
								<dd class="inline">White</dd>
							</div>
						</dl>
					</div>

					<div class="flex flex-1 items-center justify-end gap-2">
						<form>
							<label for="Line2Qty" class="sr-only"> Quantity </label>

							<input
								type="number"
								min="1"
								value="1"
								id="Line2Qty"
								class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
							/>
						</form>

						<button class="text-gray-600 transition hover:text-red-600">
							<span class="sr-only">Remove item</span>

							<svg
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-4 w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
								/>
							</svg>
						</button>
					</div>
				</li>
			</ul>

			<Sheet.Footer>
				<section class="mt-8 flex justify-end border-t border-gray-100 pt-8">
					<section class="max-w-lg space-y-4">
						<dl class="space-y-0.5 text-sm text-gray-700">
							<div class="flex justify-between">
								<dt>Subtotal</dt>
								<dd>£220</dd>
							</div>

							<div class="flex justify-between">
								<dt>Discount</dt>
								<dd>-£20</dd>
							</div>

							<div class="flex justify-between !text-base font-medium">
								<dt>Total</dt>
								<dd>£200</dd>
							</div>
						</dl>

						<div class="flex justify-end">
							<span
								class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
							>
								<svg
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="-ms-1 me-1.5 h-4 w-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
									/>
								</svg>

								<p class="whitespace-nowrap text-xs">2 Discounts Applied</p>
							</span>
						</div>

						<div class="checkout-button flex justify-end">
							<a
								href="/carrito"
								class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
							>
								Checkout
							</a>
						</div>
					</section>
				</section>
			</Sheet.Footer>
		</Sheet.Content>
	</Sheet.Root>
</menu>
