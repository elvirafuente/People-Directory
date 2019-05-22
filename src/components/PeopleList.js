import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import PersonCard from './PersonCard'

class PeopleList extends React.Component {
    render() {
        return (
            <Fragment>
            <h2>People List</h2>
            <ul>
            {this.props.data.map(item =>
                <li key={item.login.uuid}>
                    <PersonCard personData={item}/>
                </li>
            )}
            </ul>
            </Fragment>
            
        )
    }

}

PeopleList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PeopleList;