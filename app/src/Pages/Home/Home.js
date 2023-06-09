import Navbar from "../../Component/Navbar";
import home from '../../assets/home.jpg';
import mobileHome from '../../assets/home_mobile.jpg';
import './home.css';
import { useEffect, useState } from "react";
import { getHighlights } from "../../api/highlights";
import {getCategories} from "../../api/categories"
import Card from "../../Component/Card";
import Category from "../../Component/Category";
import Footer from "../../Component/Footer";
import Guide from "../../Component/Guide";
import axios from "axios";

function Home() {

    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);

    function handleWindowSizeChange() {
        setIsMobile(window.innerWidth < 850);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const[highlights, setHighlights] = useState([{"title":"Surfing","description":"Best Hawaiian islands for surfing.","image":"https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png"},{"title":"Traditional Festivals","description":"Best places to attend traditional festivals in Hawaii","image":"https://storage.googleapis.com/topics-images/web-dev-images/traditional_festivals_low.png"},{"title":"Volcanoes","description":"Volcanic conditions can change at any time.","image":"https://storage.googleapis.com/topics-images/web-dev-images/volcanoes_low.png"}])
    const [categories, setCategories] = useState([{"name":"Adventure","activities":[{"title":"Surfing in the waves of Waikiki"},{"title":"Hiking the Diamond Head trail in Oahu"},{"title":"Exploring Hawaii Volcanoes National Park"},{"title":"Snorkeling at the beaches of Maui"},{"title":"Taking a helicopter tour to see the active volcanoes and waterfalls"}]},{"name":"Culinary","activities":[{"title":"Taking a Hawaiian cooking class"},{"title":"Trying Poke at a local restaurant"},{"title":"Going on a coffee tasting tour in the Big Island"},{"title":"Attending a Hawaiian luau dinner show"},{"title":"Visiting a local market to taste exotic fruits and other local products"}]},{"name":"Eco-tourism","activities":[{"title":"Hiking in the lush forests of the Big Island"},{"title":"Kayaking through the mangroves of Maui"},{"title":"Whale watching during the winter months"},{"title":"Snorkeling with sea turtles at the Turtle Bay on Oahu"},{"title":"Visiting the Akaka Falls State Park on the Big Island to see the stunning waterfall"}]},{"name":"Family","activities":[{"title":"Visiting the Waikiki Aquarium in Oahu"},{"title":"Going on a scenic drive to see the Road to Hana on Maui"},{"title":"Exploring the Polynesian Cultural Center on Oahu"},{"title":"Taking a sunset dinner cruise along the coast of Maui"},{"title":"Attending a hula show or a Hawaiian music concert as a family"}]},{"name":"Sport","activities":[{"title":"Playing golf on one of Hawaii's world-famous courses"},{"title":"Going on a deep-sea fishing excursion"},{"title":"Participating in a beach volleyball game on Waikiki Beach"},{"title":"Hiking the challenging trails of the Koko Head Crater on Oahu"},{"title":"Surfing lessons on the North Shore of Oahu"}]}])
    
    const fetchData = async() => {
        try{
            const response = await getHighlights('https://web-dev.dev.kimo.ai/v1/highlights'); 
            console.log(response) 
            if(response){
                setHighlights(response)
            }
            const categoryResponse = getCategories('https://web-dev.dev.kimo.ai/v1/categories')
            if(categoryResponse){
                setCategories(categoryResponse);
            }

        } catch (error){
            console.log("error ",error)
        }
    }

    // const fetchData = async(url) => {
    //     try{
    //        axios({
    //         method: 'get',
    //         headers: { 'Content-Type': 'application/json'},
    //         url: 'https://web-dev.dev.kimo.ai/v1/highlights',
    //       }).then(function (response) {
    //         console.log(response);
    //       }); 
    //     //    axios.get(url)
    //     //    .then((response) => {
    //     //     response.headers("Access-Control-Allow-Origin", "*");
    //     //     response.headers("Access-Control-Allow-Headers", "Origin X-Requested-With, Content-Type, Accept");
    //     //     console.log("response ", response);
    //     //    })
    //     //    .catch((error) => {
    //     //     console.log("error",error)
    //     //    })
    //     } catch (error){
    //         //console.log("error ",error)
    //     }
    // }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
          <Navbar/>
            <div className="home">
                <img alt="" src={isMobile ? mobileHome : home}/>
                <div className="home-text">
                    <h1>Welcome to Hawai</h1>
                </div>
                <div>
                    <h6 className="subtitle">Highlights</h6>
                    <div>
                        <div className="highlights">
                            {highlights.map((highlight, index) => (
                                <Card
                                className={'item'}
                                title={highlight.title}
                                description={highlight.description}
                                image={highlight.image}
                                navigateTo={'/activities/'+highlight.title}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="categories-main">
                    <div className="categories">
                        <h6 className="subtitle">Categories</h6>
                        <div>
                            {categories.map((category, index) => (
                                <Category title={category.name}/>
                            ))}
                        </div>
                    </div>
                    <div className="categories">
                        <h6 className="subtitle">Travel Guide</h6>
                        <div>
                            <Guide/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home;