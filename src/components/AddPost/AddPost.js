import './style.css';
import { useState, useEffect } from 'react';
import Rating from 'react-simple-star-rating';

function AddPost({ posts }) {

    
    const [addedPosts, setAddedPosts] = useState([]);
    const [postes, setPostes] = useState(posts);
    const [comRating, setComRating] = useState(0)

    

    


    const addPost = (postes) => {
       
     const lastChild = postes[postes.length - addedPosts.length - 1];

        if(lastChild) {
            setAddedPosts((state) => [
                ...state,
                lastChild
            ])
        }
    }

    const reverse = () => {
       const newArr = addedPosts.reduce((a, b) => [b].concat(a), [])
       setAddedPosts(newArr)
       
    }




    return (
        <div className='list_content'>
            <div className='buttons_box'>
                <div>
                    <button onClick={reverse}>▼</button>
                </div>
                <div>
                    <button onClick={() => addPost(postes)} className='add_btn'>+</button>
                </div>
            </div>
            {addedPosts.map((post,index) => {
                const rating = post.comments.reduce((acc, item) => {
                    acc += +item.rating

                    return acc;

                    
                }, 0)

                return (
                    <div key={index} className='added_box'>
                        <div>
                            {post.post}
                        </div> 
                        <div>
                            {rating / post.comments.length}
                        </div>

                    </div>
                )
            })}
                
        </div>
    )
}


export default AddPost;