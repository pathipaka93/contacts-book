import Card from "../card/card";
import './card-list.css'
 
const CardList = ({contacts}) => {
    return (
        <div className="card-list">
            {contacts.map((contact)=> { 
             return <Card className='card-container'  key= {contact.id} contact={contact}/>
            })
            }
        </div>
    )
}

export default CardList