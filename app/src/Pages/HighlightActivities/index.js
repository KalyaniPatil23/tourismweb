import Navbar from "../../Component/Navbar";
import './activities.css';
import { useEffect, useState } from "react";
import { getActivitiesOfHighlight } from "../../api/highlights";
import Footer from "../../Component/Footer";
import {
    useParams,
  } from "react-router-dom";
  function Activities() {

    let { highlight } = useParams();
    const [isMobile, setIsMobile] = useState(false);
    const [activities, setActivities] = useState({name: "", activities: []});
    function handleWindowSizeChange() {
        setIsMobile(window.innerWidth < 850);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const fetchData = async(url) => {
        try{
            console.log(url)
            const res = getActivitiesOfHighlight(url);
            if(res){
                setActivities(res)
            } else {
                if(highlight === "Volcanoes"){
                    setActivities({"name":"Volcanoes","description":"Hawaii is home to several active volcanoes, making it a popular destination for those interested in geology and natural wonders. Here are some of the most popular volcanoes to attend in Hawaii:","image":"https://storage.googleapis.com/topics-images/web-dev-images/volcanoes.jpg","activities":[{"name":"Kilauea Volcano, Big Island"},{"name":"Mauna Loa, Big Island"},{"name":"Mount Kilimanjaro, Big Island"},{"name":"Haleakala, Maui"},{"name":"Mauna Kea, Big Island"}]})
                } else if( highlight === "Surfing"){
                    setActivities({"name":"Surfing","description":"Hawaii is known for its world-famous surf spots and waves that attract surfers from all over the globe. Here are some of the best islands for surfing in Hawaii:","image":"https://storage.googleapis.com/topics-images/web-dev-images/surfing.jpg","activities":[{"name":"North Shore, Oahu"},{"name":"Waimea Bay, Oahu"},{"name":"Sunset Beach, Oahu"},{"name":"Pipeline, Oahu"},{"name":"Maui"},{"name":"Honolii Beach Park, Big Island"},{"name":"Pe'ahi (Jaws), Big Island"},{"name":"Hanalei Bay, Kauai"},{"name":"Polihale State Park, Kauai"},{"name":"Kaunakakai Town, Molokai"}]})
                } else if (highlight === "Traditional Festivals"){
                    setActivities({"name":"Traditional Festivals","description":"Hawaii is known for its rich cultural heritage and vibrant festivals that showcase the unique traditions of the Hawaiian Islands. Here are some of the best places to attend traditional festivals in Hawaii:","image":"https://storage.googleapis.com/topics-images/web-dev-images/traditional_festivals.jpg","activities":[{"name":"Merrie Monarch Festival in Hilo, Big Island"},{"name":"King Kamehameha Day Celebration in Honolulu, Oahu"},{"name":"Aloha Festivals Floral Parade in Honolulu, Oahu"},{"name":"Kauai Mokihana Festival in Lihue, Kauai"},{"name":"Maui Nui Cultural Festival in Kahului, Maui"},{"name":"Hawaii Island Festival of Birds in Hilo, Big Island"},{"name":"Eo E Emalani I Alaka'i Festival in Kilauea, Kauai"},{"name":"Prince Lot Hula Festival in Moanalua Gardens, Oahu"},{"name":"Pua Ali'i 'Ilima Festival in Honolulu, Oahu"},{"name":"Makahiki Festival at the Polynesian Cultural Center on Oahu"}]})
                }
            }
        } catch (error){
            console.log("error ",error)
        }
    }

    useEffect(() => {
        fetchData('https://web-dev.dev.kimo.ai/v1/activities/'+ highlight)
    }, [highlight])

    return(
        <>
          <Navbar/>
            {<div className="activity">
                    <img alt="" src={activities.image}/>
                    <div className="activity-text">
                        <h1>{activities.name}</h1>
                    </div>
                    <div className="activity-main">
                    <div className="activities">
                        {activities.activities && <ul>
                            {activities.activities.map((activity, index) => (
                                <li key={index}>
                                <h3>{activity.name}</h3>
                                </li>
                            ))}
                        </ul>}
                    </div>
                    <div className="description">
                        <h6 className="subtitle">{activities.description}</h6>
                    </div>
                </div>
            </div>
            }
            <Footer/>
        </>
    );
}

export default Activities;