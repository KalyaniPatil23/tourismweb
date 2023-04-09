import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './category.css';

function Category(props) {

    return(
        <div className='container'>
            <div className='title'>
                <h6>{props.title}</h6>
            </div>
            <div className='icon'>
                <FontAwesomeIcon icon={faArrowRight} size='1x' color='#008080'/>
            </div>
        </div>
    )
}

export default Category;