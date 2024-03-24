<script>
	import TitleBlock from "$lib/components/TitleBlock.svelte";
	export let data;
</script>
<svelte:head>
	<title>Team SMP: Blog</title>
	<meta name="description" content="The Team SMP blog." />
</svelte:head>

<TitleBlock><b>Blog</b></TitleBlock>

<div id="posts" class="grid grid-cols-3 gap-4 mt-5">
	{#each data.posts as post }
		<div class="bg-gray-300 dark:bg-slate-800 p-4 rounded-xl">
			<h2 class="text-2xl font-title font-medium motion-safe:transition-all motion-safe:duration-[250ms] motion-safe:delay-100 motion-safe:hover:translate-x-2 motion-safe:hover:scale-105"><a class="underline hover:text-blue-500 dark:hover:text-blue-700 transition-colors" href={post.path}>{post.meta.title}</a></h2><span class="text-sm text-gray-500">{post.meta.date}</span>
		</div>
	{/each}
</div>