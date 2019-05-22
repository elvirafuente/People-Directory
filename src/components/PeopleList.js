import React, { Fragment } from 'react';
import PersonCard from './PersonCard'

class PeopleList extends React.Component {
    render() {
        return (
            <Fragment>
                <p>PeopleList</p>
                <PersonCard />
            </Fragment>
        )
    }

}

export default PeopleList;