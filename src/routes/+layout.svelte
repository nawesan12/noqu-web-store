<script>
	import '$lib/styles/app.css';
	import '$lib/styles/animations.css';
	import { Toaster } from 'svelte-sonner';
</script>

<svelte:head>
	<title>Noqu 137</title>
</svelte:head>

<Toaster />
<slot />
