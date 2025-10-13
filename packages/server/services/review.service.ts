import { type Review } from '../generated/prisma';
import { reviewRespository } from '../repositories/review.repository';

export const reviewService = {
  async getReviews(productId: number): Promise<Review[]> {
    return reviewRespository.getReviews(productId);
  },

  async summarizeReviews(productId: number): Promise<string> {
    // Get the last 10 reviews
    const reviews = await reviewRespository.getReviews(productId, 10);
    const joinedReviews = reviews.map((r) => r.content).join('\n\n');
    // Send the reviews to LLM
    const summary = 'This is a placeholder summary.';

    return summary;
  },
};
