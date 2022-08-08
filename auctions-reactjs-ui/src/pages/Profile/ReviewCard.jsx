import React from 'react'
import profilePlaceHolder from '../../assets/user-placeholder.png';

export const ReviewCard = ({review}) => {
  return (
    <div className='review-card'>
        <div className='review-card__grade-container'>
            <img src={profilePlaceHolder} alt="" className='review-card__reviewer-photo' />
            <div>
                <span className='review-card__reviewer-name'>{review.name} {review.lastname}</span> <br />
                <span className='review-card__reviewer-date'>{review.reviewDate}</span> <br />
                <span className='review-card__reviewer-grade'>{review.grade}</span>
            </div>
           
        </div>
        <p>{review.comment}</p>
    </div>
  )
}
