import type { IVideoSnippet } from './ivideo-snippet.interface';
import type { IVideoStatistics } from './ivideo-statistics.interface';

export interface IVideoCard {
	id: string;
	// youtube
	snippet: IVideoSnippet;
	statistics: IVideoStatistics;
}
