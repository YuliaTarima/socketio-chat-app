import React from "react";

import useChat from "./_useChat";
import MessageBox from "./MessageBox";
import Messages from "./Messages";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Chat = () => {
    const {messages, sendMessage} = useChat();

    return (
        <>
            <Container>
                <h1>Welcome to Chat!</h1>
                <Paper elevation={3} style={{ padding: 10 }}>
                    <div>
                        <Messages messages={messages}/>
                        <MessageBox
                            onSendMessage={message => {
                                sendMessage({message});
                            }}
                        />
                    </div>
                </Paper>
            </Container>
        </>
    );
};

export default Chat;