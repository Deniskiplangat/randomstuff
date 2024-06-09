import React, { Component } from 'react';
import './Aim.css';


class Aim extends Component {
    render() {
        return (
            <div  >
                <div className="aim">
                    <div className="container">
                        <div className="row">
                            <div >
                                  <h2 className="aim-heading">My Mission</h2>
                                <br/>
                                </div>
                                

                            
                        </div>
                        <div className = "row">
                        <div className = "col-md-1"></div>
                        <div className = "col-md-10">
                        <p className="aim-text">
                                
                               Our mission is to serve the people in need of blood.The overall objective is to have blood available to people in need.
                               No one should die due to the lack of blood .This is a long step towards having available blood to everyone in the world.                                   
                                
                            </p>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aim;