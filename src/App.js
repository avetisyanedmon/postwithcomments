import './App.css';
import PostsBox from './components/PostBox/PostsBox';
import AddPost from './components/AddPost/AddPost';
import { useState } from 'react';




function App() {

  const [posts, setPosts] = useState([
    {
      post:"LoremA Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      comments:[{user:'John', text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', rating:'4.2'},{user:'Grant', text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', rating:'2.2'}],
    },
    {
      post:"LoremB Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      comments:[{user:'Bob', text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', rating:'3'},{user:'Jack', text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', rating:'3'}]
    },
    {
      post:"LoremC Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      comments:[{user:'Mary', text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', rating:'2.2'},{user:'Frank', text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', rating:'2.2'}]
    },
    {
      post:"LoremD Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      comments:[{user:'Paul', text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', rating:'4'},{user:'Clark', text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', rating:'3.5'}]
    },
    {
      post:"LoremE Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronicsa",
      comments:[{user:'Zane', text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', rating:'1'},{user:'Kane', text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', rating:'5'}]
    },

  ])




  return (
    <div className="App">
      <div className='container'>
         <PostsBox posts={posts}/>
         <AddPost posts={posts}/>
      </div>
    </div>
  );
}

export default App;
