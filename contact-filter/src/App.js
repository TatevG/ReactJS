import React, { Component } from 'react';
import Contacts from './components/contacts';
import ContactList from './components/contactList';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      phoneNumber:'',
      image: ''
    };
  }

  getInitialState() {
    return {
      displayedContacts: this.state
    };
  }

  handleSearch(event) {
    var searchQuery = event.target.value.toLowerCase();
    var displayedContacts = this.state.filter(function (el) {
      var searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
      displayedContacts: displayedContacts
    });
  }

  render() {
  return (
    <div className="contacts">
      <input type="text" className="search-field" onChange={this.handleSearch} />
      <ul className="contacts-list">
        {
          this.state.displayedContacts.map(function (el) {
            return <Contacts
              key={el.id}
              name={el.name}
              phoneNumber={el.phoneNumber}
              image={el.image}
            />;
          })
        }
      </ul>
    </div>
  );
}
}

export default App;
