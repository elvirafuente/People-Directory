import React, {Fragment} from 'react';

class Filters extends React.Component{
    render(){
        const {actionGender} = this.props
        return (
            <Fragment>
                <h2>Filters</h2>
                <form>
                    <fieldset>
                        <legend>Filter by gender</legend>
                        <label>
                            <input type="checkbox" value="female" name="genders"  onClick={actionGender}/>
                            Female
                        </label>
                        <label>
                            <input type="checkbox" value="male" name="genders" onClick={actionGender}/>
                            Male
                        </label>
                    </fieldset>
                </form>
            </Fragment>
        )
    }

}

export default Filters;