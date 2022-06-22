import { TextField } from "@mui/material";

export default function TextFieldPassword(props: any) {
    return (
        <TextField
            label="Password"
            placeholder="Password"
            type="password"
            margin="normal"
            {...props}
        />
    );
}
