import React from 'react'

import { useState } from 'react'
import { useEffect } from 'react'
import { ReviewCard } from './ReviewCard';

export const ReviewsPanel=({userID})=>{
    const [reviews,setReviews] = useState([]);

    const [comment,setComment] = useState('');
    const [grade, setGrade] = useState(1);

    useEffect(()=>{
        fetch(`https://localhost:44301/api/UserReview/get-reviews/${userID}`, {
          method: 'GET',
          headers: {'Content-Type':'application/json'},
        })
        .then(res =>res.json())
        .then(res=>{
            setReviews(res)
        })
        .catch(res => console.log(res));
      },[])


    const SendReview=()=>{
        const token = localStorage.getItem('jwt');
        fetch(`https://localhost:44301/api/UserReview/add-review/${userID}`, {
            method: 'POST',
            headers: {'Content-Type':'application/json',
                        "Authorization" : `Bearer ${token}`},
            body: JSON.stringify({
              grade:grade,
              comment:comment,
            })
        })
        .then(()=>{alert('Review send')})
        .catch(res => console.log(res));
    }

    return(
      <div className='user-reviews-container'>
        <div className="new-review">
            <div className="new-review__grades">
                <button onClick={()=>setGrade(1)} className='new-review__grade'>1</button>
                <button onClick={()=>setGrade(2)} className='new-review__grade'>2</button>
                <button onClick={()=>setGrade(3)} className='new-review__grade'>3</button>
                <button onClick={()=>setGrade(4)} className='new-review__grade'>4</button>
                <button onClick={()=>setGrade(5)} className='new-review__grade'>5</button>
            </div>
            <div className="new-review__comment-container">
                <input type="text" name="" id="" className='new-review__input-field' placeholder='Comment' onChange={(event)=>(setComment(event.target.value))}/>
                <button className='light-blue-bg-white-txt-btn' onClick={SendReview}>Place review</button>
            </div>
        </div>
        <div className='user-reviews'>
            
          {reviews.length > 0? reviews.map(review=>{
              return <ReviewCard review={review} />
            })
            :null
          }
        </div>
      </div>
    )
  }