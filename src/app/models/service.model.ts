import { ReviewCard } from './review-card.model';

export class ServiceResponse{
    status: string;
    copyright: string;
    has_more: boolean;
    num_results: number;
    results: ReviewCard[];
}