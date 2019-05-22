import React, {Fragment} from 'react';

class Filters extends React.Component{
    render(){
        return (
            <Fragment>
                <h2>Filters</h2>
                <form>
                    <fieldset>
                        <legend>Filter by gender</legend>
                        <label>
                            <input type="checkbox" value="female" name="genders" checked={true}/>
                            Female
                        </label>
                        <label>
                            <input type="checkbox" value="male" name="genders" checked={true}/>
                            Male
                        </label>
                    </fieldset>
                </form>
            </Fragment>
        )
    }

}

export default Filters;