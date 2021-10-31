import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Message from '../Message/Message';

const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/message')
            .then(res => res.json())
            .then(data => setMessages(data))
    }, []);

    return (
        <div className="p-4">
            <h1>Traveller's Messages</h1>
            <div className="row mx-auto px-4 py-1">
                {
                    messages.map(message => <Message
                        key={message._id}
                        message={message} >
                    </Message>)
                }
            </div>
        </div>
    );
};

export default Messages;