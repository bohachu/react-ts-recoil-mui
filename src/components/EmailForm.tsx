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
        <Grid container justifyContent="center" textAlign="center" spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        fullWidth
                        label="Email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        sx={{
                            mb: 2,
                            height: "100%",
                            width: { xs: "100%", sm: "75%", md: "100%" }
                        }}
                    />
                    <Button fullWidth type="submit" variant="contained" color="primary" sx={{
                        mb: 2,
                        height: "100%",
                        width: { xs: "100%", sm: "75%", md: "100%" },
                        padding: "14px 16px",
                        backgroundColor: "#5090D3",
                        color: "#fff",
                        border: "2px solid #5090D3",
                        transition: "all 0.3s",
                        "&:hover": {
                            color: "#5090D3",
                            border: "2px solid #5090D3",
                            backgroundColor: "rgba(0, 0, 0, 0)"
                        }
                    }}>
                        Submit
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default EmailForm;
