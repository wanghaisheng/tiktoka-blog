<script lang="ts" context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		return {
			props: {
				blogs: await fetch(`/blog.json?recent=${3}`).then((res) => res.json()),
			},
		};
	}
</script>

<script lang="ts">
	// Start: External Imports
	// End: External Imports

	// Start: Svelte Imports
	// End: Svelte Imports

	// Start: Local Imports

	// Core services

	// Utils

	// Components
	import HeadTags from '$components/head-tags/HeadTags.svelte';
	import BlogPost from '$components/blog-post/BlogPost.svelte';
	import ProjectCard from '$components/project-card/ProjectCard.svelte';

	// Models
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';
	import type { IProjectCard } from '$models/interfaces/iproject-card.interface';
	import type { IBlog } from '$models/interfaces/iblog.interface';
	// End: Local Imports

	// Exports
	export let blogs!: IBlog[];
	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData: Partial<IMetaTagProperties> = {
		title: `Tiktoka | Douyin tookit`,
		description:
			'brand research such as video download,influencer analytics,influencer email collection,user comment monitor,giveaway tool,livestreaming toolkit etc.',
		keywords: ['tiktok', 'douyin', 'tiktok video'],
	};

	const projects: IProjectCard[] = [
		{
			title: 'TikToka™ videos downloader',
			description:
				'TikToka™ tiktok/douyin videos Batch Download tookit douyin/TikTok No Watermark.',
			slug: 'https://api.tiktokvideos.download/',
			icon: '',
		},
		{
			title: 'TikToka™ videos archive',
			description:
				'TikToka™ tiktok/douyin popular influencer video backup mirror,instant archive',
			slug: 'https://tiktokvideos.download/',
			icon: '',
		},
	];
	// End: Local component properties

	// Start: Local component methods

	// End: Local component methods
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<!-- Start: Home Page container -->
<div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
		Hey, I’m Tiktoka
	</h1>
	<p class="prose text-gray-600 dark:text-gray-400 mb-16">
		we are currently working on serveral tools for your using tiktok to brand research such as video download,influencer analytics,
		influencer email collection,user comment monitor,giveaway tool,livestreaming toolkit etc
		<a sveltekit:prefetch href="/project" aria-label="Tiktoka tools" class="text-blue-700 hover:text-blue-800 transition"
			>learn more about Projects.</a
		>
	</p>

	<!-- Start: Popular Blog Section -->
	<h2 class="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white"> Most Recent </h2>

	{#if blogs.length > 0}
		{#each blogs as blog, index (blog.slug)}
			<BlogPost blog="{blog}" />
		{/each}
	{/if}
	<!-- End: Popular Blog Section -->

	<!-- Start: Top Projects -->
	<h2 class="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white"> Top Projects </h2>

	{#if projects.length > 0}
		{#each projects as project}
			<ProjectCard project="{project}" />
		{/each}
	{/if}
	<!-- End: Top Projects -->
</div>
<!-- End: Home Page container -->
