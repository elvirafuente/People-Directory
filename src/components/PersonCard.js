import React from 'react';

class PersonCard extends React.Component{
    render(){
        const {name, picture, dob, location} = this.props.personData
        return (
            <article>
                <h3>{`${name.first} ${name.last}`}</h3>
                <img src={picture.medium}/>
                <p>Age: {dob.age}</p>
                <p>City: {location.city}</p>
            </article>
        )
    }

}

export default PersonCard;

