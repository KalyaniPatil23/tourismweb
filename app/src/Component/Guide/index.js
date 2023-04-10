import './guide.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import profile from '../../assets/profile.jpg';

function Guide(props) {

    return(
        <div className='guide-container'>
            <div className='details'>
                <h1>Hadwin Malon</h1>
                <p>Guide since 2012</p>
                <div className='contact'>
                    <button>Contact</button>
                </div>
            </div>
            <div className='profile'>
            <img alt="" src={profile}/>
            </div>
        </div>
    )
}

export default Guide;