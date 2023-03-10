import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userEmailState } from '../recoil/atoms';

const EmailForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [userEmail, setUserEmail] = useRecoilState(userEmailState);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUserEmail(email);
        try {
            const response = await fetch('http://localhost:8000/api/trial/v1/trial_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            });
            if (response.ok) {
                console.log('Email sent successfully!');
            } else {
                console.log('Failed to send email.');
            }
        } catch (error) {
            console.log('Error:', error);
        }
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
                    <Grid container justifyContent="center" textAlign="center">
                        <Button fullWidth type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default EmailForm;
