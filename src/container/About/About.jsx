import React,{useState,useEffect} from 'react';
import './About.scss';
import {motion} from 'framer-motion';
// import {images} from '../../constants';
import { urlFor,client} from '../../client';
import {AppWrap,MotionWrap} from '../../wrapper';


// const abouts=[
//   {title:'Web Design', description:'I am a good web designer',imgUrl:images.about01},
//   {title:'UI/UX designer', description:'I am a a great UI/UXdesigner',imgUrl:images.about02},
//   {title:'Backend Java Developer', description:'I am Java Developer',imgUrl:images.about03},
//   {title:'Java Developer', description:'I am Java Developer',imgUrl:images.about04},

// ];



const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    //query for fetching about section
    const query='*[_type=="abouts"]';

    client.fetch(query).then((data)=>setAbouts(data))
   
  }, []);
   

  return (
  <>
    <h2 className="head-text">
      Good design = Great products
      <span> drives </span>
      <br /> business <span>to Success</span>
    </h2>  

    <div className="app__profiles">
      {abouts.map((about,index)=>(

        <motion.div

          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5,type:'tween'}}
          className="app__profile-item"
          key={about.title + index}
        
        >
          <img src={urlFor(about.imgUrl)} alt={about.title}></img>
          <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
          <p className="p-text" style={{marginTop:10}}>{about.description}</p>
        </motion.div>


      ))}

    </div>
 
 
  </>

  )
}


export default AppWrap(
  MotionWrap(About,'app__about'),
  'about',"app__whitebg");