import React from 'react';

export default 
class ContactsList extends React.Component{
    render() {
        return (
            <div className="contacts">
                <input type="text" className="search-field" onChange={this.handleSearch} />
                <ul className="contacts-list">
                </ul>
            </div>
        );
    }
}