import { Component } from "react";
import Card from "../card/card";
import './card-list.css'

class CardList extends Component{
    render(){
        const {contacts} = this.props;
        return (
            <div className="card-list">
                {contacts.map((contact)=> { 
                    return <Card className='card-container'  key= {contact.id} contact={contact}/>
                })
            }
            </div>
        )
    }
}

export default CardList