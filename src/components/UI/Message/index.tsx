import React from 'react';

interface MessageProps {
    msg: string;
    type: 'danger' | 'success';
}

const Message: React.FC<MessageProps> = ({ msg, type }) => {
    return (
        <div className={type === 'danger' ? "text-red-500" : "text-green-400"}>{msg}</div>
    );
}

export default Message;