import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../PostForm/PostForm";
import { useDispatch, useSelector } from "react-redux";
import { editPost, getPostById } from "../../../redux/postsRedux";
import { Navigate } from 'react-router-dom';

const EditPostForm = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const post = useSelector(state => getPostById(state, id));

;    
    const handleSubmit = post => {
        dispatch(editPost({id, ...post}));
        navigate('/post/' + id);
    };
  if (!post) return <Navigate to='/' />
  else return(
    <PostForm action={handleSubmit} actionText={'Save changes'} title={post.title} author={post.author} shortDescription={post.shortDescription} content={post.content} publishedDate={post.publishedDate} /> 
  );
};

export default EditPostForm;