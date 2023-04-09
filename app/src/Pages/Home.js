import Navbar from "../Component/Navbar";
import home from '../assets/home.jpg';
import './home.css';
import { useEffect, useState } from "react";
import { getHighlights } from "../api/highlights";
import Card from "../Component/Card";
import HorizontalScroll from 'react-scroll-horizontal';

function Home() {

    const[highlights, setHighlights] = useState([{"title":"Surfing","description":"Best Hawaiian islands for surfing.","image":"https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png"},{"title":"Traditional Festivals","description":"Best places to attend traditional festivals in Hawaii","image":"https://storage.googleapis.com/topics-images/web-dev-images/traditional_festivals_low.png"},{"title":"Volcanoes","description":"Volcanic conditions can change at any time.","image":"https://storage.googleapis.com/topics-images/web-dev-images/volcanoes_low.png"}])
    // const fetchData = async (url) => {
    //     try{
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         console.log(data);
    //     } catch (error){
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     fetchData('https://web-dev.dev.kimo.ai/v1/highlights')
    // }, [])

    return(
        <>
          <Navbar/>
            <div className="home">
                <img alt="" src={home}/>
                <div className="home-text">
                    <h1>Welcome to Hawai</h1>
                </div>
                <div>
                    <h6 className="subtitle">Highlights</h6>
                    <div className="highlights">
                        {highlights.map((highlight, index) => (
                            <Card title={highlight.title} description={highlight.description} image={highlight.image}/>
                        ))}
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Home;