import { LuMessageSquarePlus } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import { useState } from "react";

const ReviewModal = ({ onClose, onAddReview, editData, onUpdate }) => {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(editData ? editData.rating : 0);
  const [movieTitle, setMovieTitle] = useState(editData ? editData.title : "");
  const [review, setReview] = useState(editData ? editData.review : "");

  const handleSubmit = () => {
    const reviewPackage = {
      id: editData ? editData.id : Date.now(),
      title: movieTitle,
      rating: rating,
      review: review,
    };

    if (editData) {
      onUpdate(reviewPackage);
    } else {
      onAddReview(reviewPackage);
    }

    onClose();
  };

  return (
    <div className='flex fixed inset-0 z-50 items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto '>
      <article className='bg-surface-dark border border-border-subtle rounded-xl shadow-2xl w-full max-w-lg overflow-y-auto max-h-[90vh] scrollbar-hide'>
        <header className='flex justify-between items-center border-b border-border-subtle p-5 sticky top-0 bg-surface-dark z-10'>
          <div className='flex items-center gap-3'>
            <div className='bg-brand-primary p-2 rounded-lg'>
              <LuMessageSquarePlus className='text-2xl md:text-3xl text-blue-300' />
            </div>
            <h4 className='text-xl md:text-2xl font-bold'>
              {editData ? "Update Review" : "Write a Movie Review"}
            </h4>
          </div>

          <button
            onClick={onClose}
            className='hover:text-red-500 transition-colors'>
            <MdClose className='text-2xl md:text-3xl cursor-pointer' />
          </button>
        </header>

        <Input
          labelInput='Movie Title *'
          type='text'
          name='title'
          id='movie-title'
          placeholder='Enter the movie title'
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          className='px-7 mt-5'
        />

        <div className='flex flex-col gap-2 px-7 mt-5'>
          <label className='text-sm md:text-xl'>Your Rating *</label>

          <div className='flex gap-2'>
            <div className='flex'>
              {stars.map((position) => (
                <button
                  type='button'
                  key={position}
                  onClick={() => setRating(position)}>
                  <MdOutlineStar
                    className={`text-2xl ${position <= rating && "text-yellow-400"}`}
                  />
                </button>
              ))}
            </div>
            <span className='font-bold text-lg'>{rating}/5</span>
          </div>

          <p className='text-secondary text-sm md:text-xl'>
            Click to rate the movie
          </p>
        </div>

        <TextArea
          title='Your Review *'
          name='your-review'
          id='your-review'
          placeholder='Share your thoughts about the movie..'
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <div className='flex justify-between px-7 my-5'>
          <Button variant='secondary' onClick={onClose} className='w-full mr-4'>
            Cancel
          </Button>
          <Button variant='danger' onClick={handleSubmit} className='w-full'>
            {editData ? "Update Review" : "Publish Review"}
          </Button>
        </div>
      </article>
    </div>
  );
};

export default ReviewModal;
