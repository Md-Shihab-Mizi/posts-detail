import React from 'react';



const Comment = (props) => {
    const { body } = props.comment;

    return (
        <div style={{ marginBottom: '20px', marginLeft: '10px' }}>
            {body}
        </div>
    );
};

export default Comment;