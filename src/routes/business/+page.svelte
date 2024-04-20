<svelte:head>
	<title>Team SMP: Businesses</title>
</svelte:head>

<script>
	import TitleBlock from "$lib/components/TitleBlock.svelte";
	import businessInfoData from './business.json';

	let businessInfo = Object.entries(businessInfoData).map(([key, value]) => ({
		id: key,
		...value
	}));

	/**
     * @param {string | any[]} founders
     */
	function getFounderLabel(founders) {
		return founders.length === 1 ? 'Founder' : 'Founders';
	}
</script>

<TitleBlock><b>Businesses</b></TitleBlock>
<section class="mt-5" id="SECT_lead">
	
	<p class="mb-2 2xl:w-3/5 xl:w-1/2 w-full">You can start a business on the Team SMP. Here is a list of them:
	</p>

</section>

<div class="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 gap-6 mt-5">
	{#each businessInfo as { id, link, displayname, desc, image, founders }}
		<div class="bg-gray-300 dark:bg-slate-900 rounded-xl shadow-md hover:shadow-lg shadow-gray-400 hover:shadow-gray-400 dark:shadow-slate-950 dark:hover:shadow-slate-950 transition-shadow flex flex-col h-ful">
			<a href={link}>
				<img class=" rounded-t-xl w-full " src="{image}" alt="{displayname}" />
				<div class="p-7 pt-5">
					<h3 class="text-3xl font-bold mb-2">{displayname}</h3>
					<p class="mb-2 flex-grow">{desc}</p>
					<p class="font-bold text-center" id="founders">
						<span class="text-gray-600 dark:bg-gray-400 block">{getFounderLabel(founders)}</span>
						<span class="block">{founders.join(', ')}</span>
					</p>
				</div>
			</a>
		</div>
	{/each}
</div>