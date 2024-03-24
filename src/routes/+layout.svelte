<script>
	import { fade } from 'svelte/transition';
	import "../app.css"
	export let data;
</script>

{#key data.currentRoute}
	<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 150 }}>
		<slot />
	</div>
{/key}