import React from 'react';
import "./InputBox.css"

const InputBox = () => {
    return ( 
        <form className="inputBox">
            <input 
                className="inputBox__text"
                type="text"
                placeholder="Type a message..." />
            <button className="inputBox__button">SEND</button>
        </form>
     );
}
 
export default InputBox;