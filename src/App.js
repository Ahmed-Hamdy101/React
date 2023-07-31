// import logo from './logo.svg';
import './css/App.css';
import React, { Component } from 'react';
import ListContact from "./ListContact"
import CreateContact from "./CreateContact";
import { Route } from 'react-router-dom';
class App extends Component {

  state = {
    contacts :[
      {
        id: 'Lady',
        name: 'Alphena',
        handle: '@loveart',
        avatarURL: 'http://localhost:3000/img/family.png'
      },
      {
        id: 'Logren',
        name: 'tortle',
        handle: '@lovemusic',
        avatarURL: 'http://localhost:3000/img/girl.png'
  
      }, {
        id: 'Lofren',
        name: 'chsweet',
        handle: '@lovescience',
        avatarURL: 'http://localhost:3000/img/famous.jpeg'
      }],
  };



  removeContact = (contact) => {

    this.setContact(contact.filter(c => c.id !== contact.id))
  }

  render() {

    return (
    
     <div className='App' >
    <Route  exact path='/'  render={()=>(
     <ListContact
     contacts={this.state.contacts}
     onDeleteContact={this.removeContact}
     />
    )}/>
       <Route path='/create' component={CreateContact}
       />

      </div>
    );
  }

}
export default App;
