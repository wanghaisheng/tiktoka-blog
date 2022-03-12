<script lang="ts">
	import ExternalLink from '$ui/components/external-link/ExternalLink.svelte';
	import type { IVideoCard } from '$models/interfaces/ivideo-card.interface';
	import type { IVideoSnippet } from '$models/interfaces/ivideo-snippet.interface';
	import type { IVideoStatistics } from '$models/interfaces/ivideo-statistics.interface';

	// Start: Local Imports
	// Components

	// Models

	// End: Local Imports

	// Start: Exported Properties
	/**
	 * @type {IBlogPostSummary}
	 */
	export let video!: IVideoCard;
	// End: Exported Properties

	// TODO
	let views = 2000;
</script>

{#if video && video?.id}
	<ExternalLink href="{`https://www.youtube.com/watch?v=${video.id}`}" ariaLabel="{video.snippet.title}">
		<div
			class="mb-4 hover:transition-shadow hover:shadow dark:hover:transition-shadow dark:hover:shadow-dark flex items-center border border-gray-200 dark:border-gray-800 rounded p-4"
		>
			<div class="h-14 w-14 ml-2 mr-4 flex-shrink-0">
				<span class="sr-only">Svelte</span>
				<img
					alt="{'Tiktoka'}"
					src="{'/images/author/tiktoka-blogger.svg'}"
					width="1.75rem"
					height="1.75rem"
					class="h-14 w-14 min-w-sm text-gray-900 dark:text-gray-100"
				/>
			</div>
			<div>
				<h3 class="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
					{video?.snippet.title}
				</h3>
				<p class="leading-5 text-gray-700 dark:text-gray-300">
					{video?.snippet.description}
				</p>
			</div>
		</div>
	</ExternalLink>
{/if}
