import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Copyright() {
	return (
		<Container>
			<Typography
				variant='body2'
				color='text.secondary'
				align='center'
				sx={{ mt: 4, mx: 1.5 }}>
				{'Copyright © '}
				<div color='inherit'>Charles Cantin - photographe</div>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		</Container>
	);
}
