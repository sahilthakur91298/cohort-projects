import Card from './components/card.jsx'
const App = () => {

const applicants = [
  {
    coverPhoto: "https://images.pexels.com/photos/4622218/pexels-photo-4622218.jpeg",
    profilePhoto: "https://randomuser.me/api/portraits/men/11.jpg",
    username: "Ethan Walker",
    description: "Front-end developer passionate about UI/UX and React.",
    likes: "1.2k",
    posts: "56",
    views: "15.8k",
    instagramLogo: "https://img.icons8.com/color/48/instagram-new.png",
    twitterLogo: "https://img.icons8.com/color/48/twitter--v1.png",
    atLogo: "https://img.icons8.com/ios-filled/50/000000/at-sign.png"
  },
  {
    coverPhoto: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    profilePhoto: "https://randomuser.me/api/portraits/women/21.jpg",
    username: "Olivia Brooks",
    description: "Graphic designer specializing in brand identity.",
    likes: "980",
    posts: "34",
    views: "12.1k",
    instagramLogo: "https://img.icons8.com/color/48/instagram-new.png",
    twitterLogo: "https://img.icons8.com/color/48/twitter--v1.png",
    atLogo: "https://img.icons8.com/ios-filled/50/000000/at-sign.png"
  },
  {
    coverPhoto: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    profilePhoto: "https://randomuser.me/api/portraits/men/31.jpg",
    username: "Liam Carter",
    description: "Full-stack engineer working with the MERN stack.",
    likes: "1.5k",
    posts: "72",
    views: "21k",
    instagramLogo: "https://img.icons8.com/color/48/instagram-new.png",
    twitterLogo: "https://img.icons8.com/color/48/twitter--v1.png",
    atLogo: "https://img.icons8.com/ios-filled/50/000000/at-sign.png"
  },
  {
    coverPhoto: "https://images.pexels.com/photos/790104/pexels-photo-790104.jpeg",
    profilePhoto: "https://randomuser.me/api/portraits/women/12.jpg",
    username: "Sophia Turner",
    description: "Content writer focused on tech and startups.",
    likes: "860",
    posts: "41",
    views: "9.8k",
    instagramLogo: "https://img.icons8.com/color/48/instagram-new.png",
    twitterLogo: "https://img.icons8.com/color/48/twitter--v1.png",
    atLogo: "https://img.icons8.com/ios-filled/50/000000/at-sign.png"
  },
  {
    coverPhoto: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    profilePhoto: "https://randomuser.me/api/portraits/men/45.jpg",
    username: "Noah Johnson",
    description: "Mobile app developer (Flutter & Kotlin).",
    likes: "1.3k",
    posts: "63",
    views: "17.5k",
    instagramLogo: "https://img.icons8.com/color/48/instagram-new.png",
    twitterLogo: "https://img.icons8.com/color/48/twitter--v1.png",
    atLogo: "https://img.icons8.com/ios-filled/50/000000/at-sign.png"
  },
  {
    coverPhoto: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    profilePhoto: "https://randomuser.me/api/portraits/women/32.jpg",
    username: "Emma Collins",
    description: "HR professional with experience in tech hiring.",
    likes: "740",
    posts: "29",
    views: "9.1k",
    instagramLogo: "https://img.icons8.com/color/48/instagram-new.png",
    twitterLogo: "https://img.icons8.com/color/48/twitter--v1.png",
    atLogo: "https://img.icons8.com/ios-filled/50/000000/at-sign.png"
  },
  {
    coverPhoto: "https://images.unsplash.com/photo-1485217988980-11786ced9454",
    profilePhoto: "https://randomuser.me/api/portraits/men/52.jpg",
    username: "James Parker",
    description: "Data analyst skilled in Python, SQL, and Power BI.",
    likes: "1.7k",
    posts: "48",
    views: "23.8k",
    instagramLogo: "https://img.icons8.com/color/48/instagram-new.png",
    twitterLogo: "https://img.icons8.com/color/48/twitter--v1.png",
    atLogo: "https://img.icons8.com/ios-filled/50/000000/at-sign.png"
  },
  {
    coverPhoto: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    profilePhoto: "https://randomuser.me/api/portraits/women/44.jpg",
    username: "Ava Mitchell",
    description: "Marketing strategist focused on social growth.",
    likes: "960",
    posts: "37",
    views: "11.4k",
    instagramLogo: "https://img.icons8.com/color/48/instagram-new.png",
    twitterLogo: "https://img.icons8.com/color/48/twitter--v1.png",
    atLogo: "https://img.icons8.com/ios-filled/50/000000/at-sign.png"
  },
  {
    coverPhoto: "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
    profilePhoto: "https://randomuser.me/api/portraits/men/67.jpg",
    username: "Benjamin Scott",
    description: "Backend engineer — Node.js, APIs, cloud.",
    likes: "1.4k",
    posts: "53",
    views: "19.2k",
    instagramLogo: "https://img.icons8.com/color/48/instagram-new.png",
    twitterLogo: "https://img.icons8.com/color/48/twitter--v1.png",
    atLogo: "https://img.icons8.com/ios-filled/50/000000/at-sign.png"
  },
  {
    coverPhoto: "https://images.unsplash.com/photo-1587355760421-b9de3226a046?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profilePhoto: "https://randomuser.me/api/portraits/women/60.jpg",
    username: "Charlotte Hayes",
    description: "UI/UX designer focused on accessibility.",
    likes: "1.1k",
    posts: "44",
    views: "16.0k",
    instagramLogo: "https://img.icons8.com/color/48/instagram-new.png",
    twitterLogo: "https://img.icons8.com/color/48/twitter--v1.png",
    atLogo: "https://img.icons8.com/ios-filled/50/000000/at-sign.png"
  },
  {
    coverPhoto: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profilePhoto: "https://randomuser.me/api/portraits/men/72.jpg",
    username: "Daniel Reed",
    description: "Cybersecurity enthusiast and ethical hacker.",
    likes: "1.8k",
    posts: "67",
    views: "26.2k",
    instagramLogo: "https://img.icons8.com/color/48/instagram-new.png",
    twitterLogo: "https://img.icons8.com/color/48/twitter--v1.png",
    atLogo: "https://img.icons8.com/ios-filled/50/000000/at-sign.png"
  },
  {
    coverPhoto: "https://media.istockphoto.com/id/981339754/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.jpg?s=2048x2048&w=is&k=20&c=infjO1gwAZbI_NBi-3IWeCLErywmnbbzZxrSilb9SEY=",
    profilePhoto: "https://randomuser.me/api/portraits/women/75.jpg",
    username: "Grace Morgan",
    description: "Project manager experienced in Agile & Scrum.",
    likes: "1.0k",
    posts: "39",
    views: "13.2k",
    instagramLogo: "https://img.icons8.com/color/48/instagram-new.png",
    twitterLogo: "https://img.icons8.com/color/48/twitter--v1.png",
    atLogo: "https://img.icons8.com/ios-filled/50/000000/at-sign.png"
  }
];
return (
      <div className="parent">
      {applicants.map((elem, index) => (
        <Card
          key={index}
          cover={elem.coverPhoto}
          profile={elem.profilePhoto}
          username={elem.username}
          description={elem.description}
          likes={elem.likes}
          posts={elem.posts}
          views={elem.views}
        />
      ))}
    </div>
  )
}

export default App
