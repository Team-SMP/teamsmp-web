<script>
	import { fade } from 'svelte/transition';
	import "../app.css"
	export let data;
</script>

<nav id="navbar" class="flex flex-row gap-6 text-xl ms-2">
	<div class="flex-none hover:scale-110 hover:translate-y-0.5 transition-transform target:text-emerald-500"><a href="/" id="">Home</a></div>
	<div class="flex-none hover:scale-110 hover:translate-y-0.5 transition-transform target:text-emerald-500"><a href="/blog" id="blog">Blog</a></div>
	<div class="flex-none hover:scale-110 hover:translate-y-0.5 transition-transform target:text-emerald-500"><a href="/business" id="business">Businesses</a></div>
</nav>

{#key data.currentRoute}
	<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 150 }} class="md:text-xl">
		<slot />
	</div>
{/key}