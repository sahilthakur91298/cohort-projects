const Card = (props) => { 
  return (
    <div className='card'> 

      <div className="top"
        style={{
        backgroundImage: `url(${props.cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <h3>Follow +</h3>

        <img src={props.profile} className="propic" alt="profile" />
      </div>  

      <div className="center">
        <h1>{props.username}</h1>
        <h3>{props.description}</h3>
      </div>   

      <div className="bottom">
        <div className="likes">
          <h3>{props.likes}</h3>
          <p>Likes</p>
        </div>

        <div className="posts">
          <h3>{props.posts}</h3>
          <p>Posts</p>
        </div>

        <div className="views">
          <h3>{props.views}</h3>
          <p>Views</p>
        </div>
      </div>

      <div className="social">
        <i className="ri-instagram-line"></i>
        <i className="ri-twitter-x-line"></i>
        <i className="ri-reddit-line"></i>
      </div>

    </div>
  );
};

export default Card;
