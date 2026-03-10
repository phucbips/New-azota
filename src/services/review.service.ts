import {
  collection,
  query,
  orderBy,
  onSnapshot
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { CourseReview } from '../types';

const COLLECTION_NAME = 'course_reviews';

class ReviewService {
  /**
   * Subscribes to all reviews, ordered by creation date.
   */
  subscribeToAllReviews(callback: (reviews: CourseReview[]) => void) {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));

    return onSnapshot(q, (snapshot) => {
      const reviews = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as CourseReview[];
      callback(reviews);
    }, (error) => {
      console.error("Error subscribing to reviews:", error);
      callback([]);
    });
  }
}

export const reviewService = new ReviewService();
