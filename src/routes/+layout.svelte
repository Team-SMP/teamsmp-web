<script>
	import { fade } from 'svelte/transition';
	import "../app.css"
	export let data;
</script>

<nav id="navbar" class="flex flex-row gap-6 text-xl ms-2">
	<div class="flex-none hover:scale-110 hover:translate-y-0.5 transition-transform"><a href="/" class="">Home</a></div>
	<div class="flex-none hover:scale-110 hover:translate-y-0.5 transition-transform"><a href="/blog">Blog</a></div>
</nav>

{#key data.currentRoute}
	<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 150 }}>
		<slot />
	</div>
{/key}