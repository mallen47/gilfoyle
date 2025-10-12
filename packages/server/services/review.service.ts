import { type Review } from '../generated/prisma';
import { reviewRespository } from '../repositories/review.repository';

export const reviewService = {
  async getReviews(productId: number): Promise<Review[]> {
    return reviewRespository.getReviews(productId);
  },
};
