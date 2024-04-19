<svelte:head>
	<title>Team SMP: Home</title>
	<meta name="description" content="The Team SMP website." />
	<meta name="google-site-verification" content="QUVXV8P_tfaaJHEBF_YaV3Ji7woT0QkLnMNRnFIwZEY" />
</svelte:head>

<script>
	import TitleBlock from "$lib/components/TitleBlock.svelte";
	import ServerInfo from "$lib/components/ServerInfo.svelte";
	import { queryParam } from 'sveltekit-search-params';

	const buttonsHidden = queryParam('hidebuttons');
</script>

<TitleBlock><b>Team SMP</b></TitleBlock>
{#if !$buttonsHidden}
	<div class="m-2 ml-1 mb-4">
		<a class=" bg-red-400 p-2 px-4 rounded-xl" href="https://youtube.com/@TeamSMP-Server?sub_confirmation=1" target="_blank" role="button"><b>Subscribe</b> on YouTube</a>
	</div>
{/if}
<p class="text-3xl mt-1">Unite, Survive, Thrive!</p>
<ServerInfo></ServerInfo>
<p class="text-2xl mt-1">The Team SMP is a survival Minecraft server, run by XxDreamXxXx and JunglTemple. It was designed to give players a fun and immersive gameplay.</p>
<section class="mt-5" id="SECT_lifesteal">

	<h2 class="text-5xl font-black font-title mb-1">LIFESTEAL</h2>

	<p class="mb-2 2xl:w-3/5 xl:w-1/2 w-full">For extra competitiveness, LifeSteal is enabled on the server, meaning that 
		whenever you kill a player in PvP, you earn one of their hearts and they 
		loose it. Maybe you can become the next feared player in PvP!
	</p>
	
</section>
