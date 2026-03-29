import { persist } from "zustand/middleware";
import { create } from "zustand";

const useReviewStore = create(
  persist(
    (set) => ({
      reviews: [],
      addReview: (newReview) =>
        set((state) => ({ reviews: [...state.reviews, newReview] })),
      deleteReview: (idToDelete) =>
        set((state) => ({
          reviews: state.reviews.filter((review) => review.id !== idToDelete),
        })),
      updateItem: (updateReview) =>
        set((state) => ({
          reviews: state.reviews.map((review) =>
            review.id === updateReview.id ? updateReview : review,
          ),
        })),
    }),
    {
      name: "movie-reviews",
    },
  ),
);

export default useReviewStore;
