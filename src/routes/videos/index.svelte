<script lang="ts" context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
	// Start: Local Imports
	// Components
	import HeadTags from '$components/head-tags/HeadTags.svelte';
	import ExternalLink from '$ui/components/external-link/ExternalLink.svelte';
	import VideoCard from '$components/video-card/VideoCard.svelte';

	// Models
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';
	import type { IVideoCard } from '$models/interfaces/ivideo-card.interface';
	import type { IVideoSnippet } from '$models/interfaces/ivideo-snippet.interface';
	import type { IVideoStatistics } from '$models/interfaces/ivideo-statistics.interface';

	// End: Local Imports

	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData: Partial<IMetaTagProperties> = {
		title: 'Video | TikToka™ tutorial',
		description: 'Project page of TikToka™ ',
		url: '/videos',
		keywords: ['TikToka™', 'TikToka™ tool', 'TikToka™ video tool'],
		searchUrl: '/videos',
	};

	const videos: IVideoCard[] = [
		{  
			id:eXVYJkcjyMs1,
			snippet:{
				title:'first video',
				description:'xxxxxxxxxxxx'
			},
			statistics:{
				viewCount:13456
			}

		},
		{  
			id:eXVYJkcjyMs,
			snippet:{
				title:'second video',
				description:'xxxxxxxxxxxx'
			},
			statistics:{
				viewCount:13456
			}

		},

	];

	// End: Local component properties
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<!-- Start: Video page section -->
<div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white"> Project </h1>
	<div class="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
		<p>
			Hey, I'm Tiktoka.Find useful resources helping you do brand research and brand monitoring
		</p>
	</div>
	{#if videos.length > 0}
		{#each videos as video}
			<VideoCard video="{video}" />
		{/each}
	{/if}
</div>
<!-- End: Video page section -->
