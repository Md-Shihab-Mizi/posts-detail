import React from 'react';

const Comment = (props) => {
    const { body, email } = props.comment;
    const commentStyle = {
        marginBottom: '20px',
        margin: '10px',
        border: '1px solid black',
        borderRadius: '20px',
        padding: '10px',
    }

    return (
        <div style={commentStyle}>
            <h3>Email :{email}</h3>
            {body}

        </div>
    );
};

export default Comment;