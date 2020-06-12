import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";

const MessageBox = ({onSendMessage: pushSendMessage}) => {
    const [message, setMessage] = useState("");

    return (
        <>

            <TextField
                id="outlined-full-width"
                label="Message"
                // helperText="Let's chat!"
                placeholder="Let's chat!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                margin="normal"
                multiline
                onChange={evt => setMessage(evt.target.value)}
                onKeyDown={evt => {
                    if (evt.key === "Enter") {
                        evt.preventDefault();
                        pushSendMessage(message);
                        setMessage("");
                    }
                }}
                rows="4"
                value={message}
            />

        </>
    );
};

export default MessageBox;