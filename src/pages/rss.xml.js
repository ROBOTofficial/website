import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_NAME } from "../consts";

export function GET(context) {
	return rss({
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: []
	});
}
