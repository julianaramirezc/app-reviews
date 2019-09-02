import { ReviewMultimedia } from './multimedia.model';
import { ReviewLink } from './link.model';

export class ReviewCard {
    display_title: string;
    mpaa_rating: string;
    critics_pick: string;
    byline: string;
    headline: string;
    summary_short: string;
    publication_date: string;
    opening_date: string;
    date_updated: string;
    multimedia : ReviewMultimedia;
    link : ReviewLink;
}


