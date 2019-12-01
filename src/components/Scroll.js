import React from 'react';

const Scroll = (props) => {
    return (
        <div style={
                {
                overflowY: 'scroll', 
                border: '1px solid black', 
                height: '800px', 
                paddingTop: '20px', 
                paddingBottom: '20px'
                }
            }>
            {props.children}
        </div>
    );
}

export default Scroll;