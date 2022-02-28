import * as React from 'react';
import Album from '../components/Album';
import Copyright from '../components/Copyright';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Container from '@mui/material/Container';

export default function Galleries() {
	return (
		<>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
			/>
			<CssBaseline />
			<ResponsiveAppBar />
			<Container
				disableGutters
				maxWidth='md'
				component='main'
				sx={{ pt: 8, pb: 6 }}>
				<Album />

				<Copyright />
			</Container>
		</>
	);
}
