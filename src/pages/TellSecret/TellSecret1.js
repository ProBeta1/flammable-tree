import React from 'react'
import Tree1 from './images/tree.png'
import "./TellSecret1.css"

export default function TellSecret1() {
    return (
        <div>
            <div className="left">
                <h4>Got a secret and it is killing you?</h4>
                <h5>You came to the right place</h5>
                <h3>Submit your secret to Flammable Tree</h3>
                <input type="text" name="Type here" placeholder="Type here" />
                <p style={{ color: 'black' }}>No worries, nothing will be saved:) </p>
            </div>



            <div className="right" style={{
                height: '10px'
            }}>
                <div className="imgbg" style={{
                    marginLeft:'500px',
                    backgroundImage: `url(${Tree1})`,
                    // backgroundSize: 'cover'
                    backgroundRepeat: 'no-repeat'
                }}></div>
            </div>
        </div>
    )
}
