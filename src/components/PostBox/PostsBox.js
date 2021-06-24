import './style.css';
import Rating from 'react-simple-star-rating';

function PostsBox({ posts }) {
    return (
        <div className='content'>
            <div className='posts_box'>
                {posts.map((post,index) => {
                return (
                    <div>
                        <div className='item_box' key={index}>
                                <div className='post_text'>
                                    {post.post}
                                </div>
                            <div>
                                {post.comments.map((comment) => {
                                return (
                                    <div className='comment_item_box' key={comment.user}>
                                        <div>{`User: ${comment.user}`}</div>
                                        <div className='comment_text_box'>
                                                {comment.text}
                                                <Rating ratingValue={comment.rating}/>
                                             </div>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>  
    )
}

export default PostsBox;