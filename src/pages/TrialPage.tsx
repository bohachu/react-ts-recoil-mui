import React from 'react';
import { Container, Typography } from '@mui/material';
// import { EmailForm } from '../components/EmailForm';
import EmailForm from "../components/EmailForm";

const TrialPage: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" sx={{ mb: 4 }}>
                Product Trial
            </Typography>
            <EmailForm />
        </Container>
    );
};

export default TrialPage;