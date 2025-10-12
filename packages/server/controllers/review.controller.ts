import type { Request, Response } from 'express';
import { reviewService } from '../services/review.service';

export const reviewController = {
  async getReviews(req: Request, res: Response) {
    const productId = Number(req.params.id); // convert id (string | undefined) to a Number

    if (isNaN(productId)) {
      res.status(400).json({ error: 'Invalid product ID.' });
      return;
    }

    const reviews = await reviewService.getReviews(productId);

    res.json(reviews);
  },
};
