<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
	import YoutubeIFrame from '../YoutubeIFrame/YoutubeIFrame.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
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
			<Accordion.Trigger>Por que 137?</Accordion.Trigger>
			<Accordion.Content
				>La 137, como concepto propio, simboliza la unicidad y singularidad de la experiencia
				individual en el tejido del multiverso. Representa la idea de que cada existencia es única,
				con su propia historia, decisiones y trayectoria en el vasto espectro de la realidad.
				<br /> <br />
				<span>
					<Dialog.Root>
						<Dialog.Trigger
							><button class="text-blue-600 font-semibold drop-shadow-sm shadow-purple-400">
								Mira este video
							</button>
						</Dialog.Trigger>
						<Dialog.Content>
							<Dialog.Header>
								<Dialog.Title>Que es 137?</Dialog.Title>
								<Dialog.Description>
									<YoutubeIFrame />
								</Dialog.Description>
							</Dialog.Header>
						</Dialog.Content>
					</Dialog.Root>
				</span>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</section>
