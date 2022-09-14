export interface Rockets {
	rocket_id: string,
	rocket_name: string,
	rocket_type: string,
	payloads: Payloads,
}

export interface Links {
	mission_patch: string,
	mission_patch_small: string,
	reddit_campaign: string,
	reddit_launch: string,
	reddit_media: string,
	presskit: string,
	article_link:string,
	wikipedia: string,
	video_link: string,
}

export interface Payloads {
	payload_mass_kg: number,
	payload_mass_lbs: number,
}

