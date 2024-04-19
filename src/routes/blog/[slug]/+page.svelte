<svelte:head>
	<title>Team SMP Blog: {data.title}</title>
</svelte:head>

<script>
	import TitleBlock from "$lib/components/TitleBlock.svelte";

	export let data;
</script>

<article class="xl:mx-48 lg:mx-32 md:mx-24">
	<TitleBlock><b>Blog</b> Post</TitleBlock>
	<h1 class="text-4xl font-title mt-4 font-medium">{data.title}</h1>
	<p class="text-2xl">{data.lead}</p>
	<p class="text-sm text-gray-500">{data.date}</p>
	<main class="prose lg:prose-xl dark:prose-invert max-w-full mt-1 prose-headings:mt-2 prose-headings:mb-1 leading-relaxed lg:leading-relaxed">
		<svelte:component this={data.content} />
	</main>
</article>