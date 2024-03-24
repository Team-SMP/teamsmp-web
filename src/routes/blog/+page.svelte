<script>
	import TitleBlock from "$lib/components/TitleBlock.svelte";
	export let data;
</script>
<svelte:head>
	<title>Team SMP: Blog</title>
	<meta name="description" content="The Team SMP blog." />
</svelte:head>

<TitleBlock><b>Blog</b></TitleBlock>

<div id="posts" class="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 gap-6 mt-5 2xl:grid-cols-5">
	{#each data.posts as post }
		<div class="bg-gray-300 dark:bg-slate-900 p-4 rounded-xl shadow-md hover:shadow-lg shadow-gray-400 hover:shadow-gray-400 dark:shadow-slate-950 dark:hover:shadow-slate-950 transition-shadow flex flex-col justify-start">
			<h2 class="text-2xl font-title font-medium motion-safe:transition-all motion-safe:duration-[250ms] motion-safe:delay-100 motion-safe:hover:translate-x-2 motion-safe:hover:scale-105">
				<a class="underline hover:text-blue-500 dark:hover:text-blue-700 transition-colors" href={post.path}>{post.meta.title}</a>
			</h2>
			<p class="text-md flex-1">{post.meta.lead}</p>
			<span class="text-sm text-gray-500 mt-1">{post.meta.date}</span>
		</div>
	{/each}
</div>