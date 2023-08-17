import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {

    return (
        <Stack className='mt-1' sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">Quãng giá không phù hợp !!!</Alert>
        </Stack>
    );
}