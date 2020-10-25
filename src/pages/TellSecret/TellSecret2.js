import React from 'react'
import TreeWithHand from './images/treewithhand.png'
import "./TellSecret2.css"

export default function TellSecret2() {
    return (
        <div>
            <div className="left">
                <h4>Got a secret and it is killing you?</h4>
                <h5>You came to the right place</h5>
                <h3>Submit your secret to Flammable Tree</h3>
                <input type="text" name="Type here" placeholder="I kill a fly" />
                <p style={{ color: 'black' }}>No worries, nothing will be saved:) </p>
            </div>


            <div className="right" style={{
                height: '10px'
            }}>
                <div className="imgbg" style={{
                    marginLeft:'500px',
                    backgroundImage: `url(${TreeWithHand})`,
                    // backgroundSize: 'cover'
                    backgroundRepeat: 'no-repeat'
                }}></div>
            </div>
        </div>
    )
}
