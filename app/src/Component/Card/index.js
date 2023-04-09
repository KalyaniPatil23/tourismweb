import './card.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

function Card(props) {

    return(
        <div className='card-container'>
            <div className='image-container'>
                <img src={props.image} alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{props.title}</h3>
                </div>
                <div className='card-body'>
                    <p>{props.description}</p>
                </div>
            </div>
            <div style={{textAlign: 'right', margin: '2%', marginTop:'auto'}}>
                <FontAwesomeIcon icon={faArrowCircleRight} size='2x' color='#E6F2F2'/>
            </div>
        </div>
    )
}

export default Card;