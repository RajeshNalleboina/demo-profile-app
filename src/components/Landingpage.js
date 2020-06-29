import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landingpage extends Component {
    render() {
        return (
            <div style={{width:"100%", margin:"auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://dentalogica-practice.co.uk/wp-content/uploads/2017/05/avatar-male-300x300.png"
                        alt="Profile Image"
                        className="profile-img"
                        />
                        <div className="banner">
                            <h1>React Web Developer</h1>
                            <hr/>
                            <p>HTML5 | CSS3 | Bootstrap4 | Js | Reactjs</p>

                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landingpage;