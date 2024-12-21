import './Card.css'
const Card = (props)=>{
    
    return (
        <div className="cardContainer">
            <h1>{props.quote}</h1>
            <p>{props.author}</p>
        </div>
    )

}
export default Card;