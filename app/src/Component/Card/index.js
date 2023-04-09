import './card.css';

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
        </div>
    )
}

export default Card;