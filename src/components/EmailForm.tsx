import React, { useState } from 'react';
import {
    Button,
    Grid,
    TextField,
} from '@mui/material';
import { useRecoilState } from 'recoil';
import { userEmailState } from '../recoil/atoms';

const EmailForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [userEmail, setUserEmail] = useRecoilState(userEmailState);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUserEmail(email);
    };

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        fullWidth
                        label="Email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        sx={{ mb: 2 }}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default EmailForm;