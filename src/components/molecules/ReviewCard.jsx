import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { useState } from "react";
import Button from "../atoms/Button";

const ReviewCard = ({ id, title, rating, review, onDelete, onEdit }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const charLimits = 150;
  const isLengthEnough = review.length > charLimits;
  const displayText = isExpanded
    ? review
    : review.slice(0, charLimits) + (review.length > charLimits ? "..." : "");

  const stars = [1, 2, 3, 4, 5];
  const currentData = { id, title, rating, review };

  return (
    <div className='bg-surface-dark border border-border-subtle rounded-xl p-5 md:py-6 md:px-8 '>
      <div className='flex justify-between items-start mb-4 md:mb-7'>
        <div className='flex-1 pr-2'>
          <h4 className='text-lg md:text-xl lg:text-2xl font-bold mb-1'>
            {title}
          </h4>

          <div className='flex items-center gap-2'>
            <div className='flex'>
              {stars.map((position) => (
                <MdOutlineStar
                  key={position}
                  className={`text-xl md:text-2xl ${position <= rating && "text-yellow-400"}`}
                />
              ))}
            </div>

            <span className='hidden lg:block text-secondary text-xl'>
              {rating} out of 5
            </span>
          </div>
        </div>

        <div className='flex gap-2 md:gap-3 shrink-0'>
          <Button
            variant='secondary'
            onClick={() => onEdit(currentData)}
            className='rounded-xl p-1.5 md:p-2'>
            <MdOutlineEdit className='text-xl md:text-2xl font-bold' />
          </Button>
          <Button
            variant='danger'
            onClick={() => onDelete(id)}
            className='rounded-xl p-1.5 md:p-2'>
            <MdOutlineDelete className='text-xl md:text-2xl font-bold' />
          </Button>
        </div>
      </div>

      <div>
        <p className='text-sm md:text-lg leading-relaxed'>{displayText}</p>
        {isLengthEnough && (
          <button
            className='text-blue-500 text-sm md:text-lg font-semibold hover:underline focus:outline-none cursor-pointer'
            onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
