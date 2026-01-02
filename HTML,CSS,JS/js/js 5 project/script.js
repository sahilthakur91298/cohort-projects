const posts = [
  {
    profilePicture: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    userName: "sahil_thakur",
    isFollowed: false,
    caption: "Enjoying the beautiful day 💫",
    isLiked: true,
    isSound: true,
    likeCount: 120,
    commentCount: 34,
    shareCount: 10,
    video: "https://www.pexels.com/download/video/5803631/"
  },
  {
    profilePicture: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    userName: "shreya_roy",
    isFollowed: false,
    isSound: true,
    caption: "Life is better with smiles 😊",
    isLiked: true,
    likeCount: 480,
    commentCount: 89,
    shareCount: 22,
    video: "https://www.pexels.com/download/video/3189297/"
  },
  {
    profilePicture: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    userName: "sahilthakurr_10",
    isFollowed: true,
    isSound: true,
    caption: "New beginnings 🔥",
    isLiked: false,
    likeCount: 210,
    commentCount: 15,
    shareCount: 5,
    video: "https://www.pexels.com/download/video/3704109/"
  },
  {
    profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    userName: "vinayak",
    isFollowed: false,
    isSound: true,
    caption: "Chasing my dreams ✨",
    isLiked: false,
    likeCount: 320,
    commentCount: 42,
    shareCount: 18,
    video: "https://www.pexels.com/download/video/5512609/"
  },
  {
    profilePicture: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    userName: "bharat_dev",
    isFollowed: true,
    isSound: true,
    caption: "feeling the peace 💪",
    isLiked: true,
    likeCount: 560,
    commentCount: 120,
    shareCount: 40,
    video: "https://www.pexels.com/download/video/4434205/"
  }
];

let section = document.querySelector("section")
let allReels = document.querySelector(".all-reels")

function data(){
let count = "";
posts.forEach((elem,idx)=>{
    count += ` <div class="reel">
    <button id = ${idx} class="sound"><i class="ri-volume-mute-line"></i></button>
                    <video autoplay loop ${elem.isSound? "muted": ""} src = "${elem.video}"></video>
                    <div class = "bottom">
                    <div class="follow">
                      <img src="${elem.profilePicture}">
                        <h3>${elem.userName}</h3>
                        <button id = ${idx} class ="user">${elem.isFollowed? 'Following':'Follow'}</button>
                        
                    </div>
                    <div class="caption">
                        <h4>${elem.caption}</h4>
                        
                    </div>
                    </div>
                    <div class="right">
                          <div id= ${idx} class="like">                           
                        <h3 class="like-icon">${elem.isLiked ? '<i class="love ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</i></h3>
                        <h3>${elem.likeCount}</h3>
                        </div>
                        <div class="comment"> 
                        <h3 class="comment"><i class="ri-chat-3-line"></i></h3>
                        <h3>${elem.commentCount}</h3>
                        </div>
                        <div class="share"> 
                        <i class="ri-share-forward-fill"></i></h3>
                        <h3>${elem.shareCount}</h3>
                        </div>
                        <div class="menu"> 
                        <h3 class="menu"><i class="ri-more-2-line"></i></h3>
                        </div>
                    </div>

                </div>`    
})

allReels.innerHTML = count;
}

data();

allReels.addEventListener("click",(dets)=>{
  if(dets.target.className == 'like'){
    if(!posts[dets.target.id].isLiked){
      posts[dets.target.id].likeCount++
    posts[dets.target.id].isLiked = true
    }
    else{
      posts[dets.target.id].likeCount--
      posts[dets.target.id].isLiked = false}
      data();   
  }
  if(dets.target.className == 'user'){
    if(!posts[dets.target.id].isFollowed){
    posts[dets.target.id].isFollowed = true
    }
  else{
    posts[dets.target.id].isFollowed = false
  }
  data();
}

  if(dets.target.className == 'sound'){
    if(!posts[dets.target.id].isSound){
    posts[dets.target.id].isSound = true
    }
  else{
    posts[dets.target.id].isSound = false
  }
  data()  
}
})