import { useEffect, useState } from "react";

const useReview = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('user_review.json')
        .then(response => response.json())
        .then(data => setReviews(data))
    },[]);
    return [reviews, setReviews];
}
export default useReview;