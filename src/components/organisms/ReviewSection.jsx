import { useState } from "react";
import useReviewStore from "../../store/reviewStore";
import { LuMessageSquarePlus } from "react-icons/lu";
import ReviewCard from "../molecules/ReviewCard";
import ReviewModal from "../molecules/ReviewModal";

const ReviewSection = () => {
  const { reviews, addReview, deleteReview, updateItem } = useReviewStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewToEdit, setReviewToEdit] = useState(null);

  const handleEditReview = (editData) => {
    setReviewToEdit(editData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setReviewToEdit(null);
  };

  return (
    <section className='text-white w-full p-5 md:py-5 lg:py-10 md:px-10 lg:px-20'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8'>
        <div>
          <h3 className='text-xl lg:text-3xl font-bold'>My Reviews</h3>
          <p className='text-base lg:text-xl text-secondary'>
            Share your thoughts on movies you've watched
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className='w-full md:w-auto flex items-center justify-center gap-2 bg-brand-primary py-2 px-4 lg:py-2.5 lg:px-5 rounded-2xl transition-all duration-200 active:scale-95'>
          <LuMessageSquarePlus className='text-xl md:text-2xl font-semibold' />
          <span className='text-base lg:text-xl font-semibold'>
            Write Review
          </span>
        </button>
      </div>

      {isModalOpen && (
        <ReviewModal
          editData={reviewToEdit}
          onClose={handleCloseModal}
          onAddReview={addReview}
          onUpdate={updateItem}
        />
      )}

      {reviews.length === 0 ? (
        <div className='border border-secondary rounded-lg flex flex-col items-center justify-center h-[250px] md:h-[300px] lg:h-[350px]'>
          <div className='bg-zinc-800 rounded-full p-3 lg:p-6 w-fit'>
            <LuMessageSquarePlus className='text-gray-500 text-4xl lg:text-5xl' />
          </div>

          <p className='text-base lg:text-xl text-secondary mt-4'>
            You haven't written any reviews yet
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className='bg-brand-primary text-base lg:text-xl font-semibold py-2 px-4 lg:py-4 lg:px-8 mt-6 rounded-2xl transition-all duration-200 active:scale-95'>
            Write Your First Review
          </button>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {reviews.map((items) => (
            <ReviewCard
              key={items.id}
              id={items.id}
              title={items.title}
              rating={items.rating}
              review={items.review}
              onDelete={deleteReview}
              onEdit={handleEditReview}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ReviewSection;
