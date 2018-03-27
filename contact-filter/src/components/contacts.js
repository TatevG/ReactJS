import React from 'react';
import '../App.css';


export default
class Contacts extends React.Component{
    render () {
    return (
        <li className="contact">
            <div className="contact-info">
                <div className="contact-id"> {this.props.id} </div>
                <div className="contact-name"> {this.props.name} </div>
                <div className="contact-username"> {this.props.username} </div>
            </div>
        </li>
        );
    }
}