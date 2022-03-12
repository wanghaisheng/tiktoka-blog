<script lang="ts">
	// Start: Local Imports
	// Components
	import HeadTags from '$components/head-tags/HeadTags.svelte';
	import ExternalLink from '$ui/components/external-link/ExternalLink.svelte';

	// Models
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';
	// End: Local Imports

	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData: Partial<IMetaTagProperties> = {
		title: 'About | Tiktoka Blog',
		description: 'About page of Tiktoka blog',
		url: '/about',
		keywords: ['tiktok', 'douyin', 'tiktok video'],
		searchUrl: '/about',
	};
	// End: Local component properties
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<!-- Start: About page section -->
<div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white"> About Me </h1>
	<div class="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
		<p>
			Hey, I'm Tiktoka. I'm a Software Developer, writer and creator 
		</p>
		<p>
			Tikto go viral the past few years and got liked by all people.I am trying to build some saas tools 
			for those struggling like me to do brand research.

		</p>
		<p>What is TikTok useful for?</p>
<p>
This app was created to record short music clips and to share them. In short, it was a real success for the community. All this because the video format is well known and is highly dynamic and fun among people at the same time.

This is the reason for the 2017 acquisition of Musical.ly by the Chinese technology company Bytedance, which was an ordinary young American community born in 2014 with a very similar purpose to TikTok: the communication of music videos.

Bytes has spent many months trying to turn both twin applications into a single unit after the purchase. The Musical.ly app was merged with TikTok until August 2018. This is why this new community multiplied in 3 months between 100 million and 130 million users.

It does not differ significantly from other communities. The application needs to be downloaded and registered to start uploading videos. You are at least 13 years of age for registration, and you need an adult's consent.

The most popular videos or those that you follow on the main screen. On the main screen. There is also a search page for new videos, people, or hashtags that will appeal to you.

You can play with the person, follow him or her, share a clip, or talk after watching a video. After that, you can play with him or her.
More about this application

The app also has a video selfies recording and editing format to record your clips. The length of the videos is concisely remembered.

You can use your filter before recording and modify your video afterward by adding effects, music background, or by selecting the images.

TikTok provides a very entertaining experience in real-time if we pay attention to its contents. It supports dynamic navigation and offers very easy to use, short content, visually appealing and musically reliable components.

But TikTok also has a powerful 'secret arm': its algorithm. It shows continues to feed that match your previous history of consumption, adjacent information, like your location or time of day, and components that were successful among people like you.

This feed is shown by default, takes precedence over the feeds of people you follow, and making the connection of a video to another very easy for you.

The expert points to the other two important differences between other communities, such as Twitter or Instagram, far from suggesting content based solely on video and with a strongly fun character: While in other networks, our people expose their talents, I dare say what they know how they can be done well: jokes playing, performing, dancing, or anything else you can think of. While people show us their best, how beautiful we are, how spectacular our projects are, and how enjoyable our friends are.
</p>
	</div>
</div>
<!-- End: About page section -->
