<script>
	import TitleBlock from "$lib/components/TitleBlock.svelte";

	export let data;
</script>

<article>
	<TitleBlock><b>Blog</b></TitleBlock>
	<h1 class="text-4xl font-title mt-3 font-medium">{data.title}</h1>
	<p class="text-sm text-gray-500">{data.date}</p>
	<div class="prose lg:prose-xl dark:prose-invert max-w-full mt-1">
		<svelte:component this={data.content} />
	</div>
</article>