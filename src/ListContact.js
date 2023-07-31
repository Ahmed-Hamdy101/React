import React,{Component} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class ListContacts extends Component{
  static proTypes ={
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}
  
  state = {
   query:' ' 
  }
  update =(query)=>{
    this.setState(()=>({
     query:query.trim()})) 
   }
   clearQuery=()=>{
    this.update=('')
   }


  render(){
   
     const {query } =this.state;
     const {contacts , onDeleteContact} = this.props;
   
    const ShowingContact = query === '' 
    ? contacts 
    : contacts.filter((c)=>(
      c.name.toLowerCase().includes(
        query.toLowerCase()))
        )
  
    return(
      <div className='list-contacts'> 
         <div className='list-contacts-top'> 
  
                <input className='search-contacts'
                type='search'
                placeholder="search..." 
                value={query} 
                onChange={((event)=>this.update( event.target.value))}/>
                  <Link 
                 to='/create' 
                className='add-contact'
                >
                Add Contacts</Link>
          </div>
    
<ol className='contact-list'>
        {ShowingContact.map( 
          (contact)=>( 
            <li key={contact.id} className='contact-list-item'>
              
        <div 
          className='contact-avatar'
          style={{ backgroundImage:`url(${contact.avatarURL})`}}
          >

        </div>

        <div className='contact-details'>
        <p> {contact.name} </p> 
        <p>{contact.handle}</p> 
        </div>

        <button onClick={()=>onDeleteContact(contact)} className='contact-remove'> </button>
        </li>)

)}
</ol>
      </div>   
        
        )
      }
}
export default ListContacts;