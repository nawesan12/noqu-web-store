<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
</script>

<section class="faq p-4 lg:max-w-xl mx-auto">
	<h2 class="text-2xl font-semibold my-4">Preguntas Frecuentes</h2>
	<Accordion.Root>
		<Accordion.Item value="item-1">
			<Accordion.Trigger>De que material estan hechas las remeras?</Accordion.Trigger>
			<Accordion.Content>
				Todas nuestras «Tees» estan hechas 100% en Algodon Jersey 24/1.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Trigger>Como se llama este estilo?</Accordion.Trigger>
			<Accordion.Content>Nuestras «Tees» siguen un estilo Boxy.</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-3">
			<Accordion.Trigger>Como se llama este estilo?</Accordion.Trigger>
			<Accordion.Content>Nuestras «Tees» siguen un estilo Boxy.</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</section>
