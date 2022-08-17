import './card.css';

const Card = ({contact}) => {
    const {name,id, email} = contact
    return (
        <div className="card-container" key={id}>
        <img 
            alt= {`contact ${name}`} 
            src= {`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>  
    )
}

export default Card