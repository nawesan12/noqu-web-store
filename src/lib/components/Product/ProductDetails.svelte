<script>
	import AddToCart from './UniqueProduct/AddToCart.svelte';
	import AddToFavorites from './UniqueProduct/AddToFavorites.svelte';
	import Breadcrumb from './UniqueProduct/Breadcrumb.svelte';
	import ColorSelect from './UniqueProduct/ColorSelect.svelte';
	import Description from './UniqueProduct/Description.svelte';
	import Details from './UniqueProduct/Details.svelte';
	import Price from './UniqueProduct/Price.svelte';
	import SelectSize from './UniqueProduct/SelectSize.svelte';
	import Title from './UniqueProduct/Title.svelte';
</script>

<section class="text-gray-700 body-font overflow-hidden">
	<div class="container px-5 mb-12 mx-auto">
		<Breadcrumb />
		<!-- <Breadcrumb {collection} {producto} /> -->
		<div class="lg:w-4/5 mx-auto flex flex-wrap">
			<img
				width={1000}
				height={1000}
				alt="ecommerce"
				class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
				src={'https://images.unsplash.com/photo-1647628632602-99542ede0930?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
			/>
			<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
				<Title />
				<Description lore={''} />

				<div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
					<ColorSelect />
					<div class="flex ml-6 items-center">
						<SelectSize />
					</div>
				</div>
				<footer class="flex">
					<Price />
					<AddToCart />
					<AddToFavorites />
				</footer>
			</div>
		</div>
	</div>
</section>

<Details />
