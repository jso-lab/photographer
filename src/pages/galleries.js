import * as React from 'react';
import Copyright from '../components/Copyright';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import SingleGallery from '../components/SingleGallery';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Galleries() {
	return (
		<>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
			/>
			<CssBaseline />
			<ResponsiveAppBar />
			<Container>
				<Typography
					component='h1'
					variant='h2'
					align='center'
					color='text.primary'
					sx={{ pt: 8, pb: 6 }}
					gutterBottom>
					Galleries de photos
				</Typography>
				<Typography
					variant='h5'
					align='center'
					color='text.secondary'
					component='p'
					sx={{ my: 4, mx: 1.5 }}>
					Je vous propose les prestations suivantes. Les thématiques ci-dessous
					ne sont pas exhaustives. Pour plus de renseignements, n'hésitez pas à
					me contacter. Nous verrons ensemble votre projet.
				</Typography>
			</Container>
			<Container>
				<SingleGallery />
			</Container>

			<Container
				disableGutters
				maxWidth='md'
				component='main'
				sx={{ pt: 8, pb: 6 }}>
				<Copyright />
			</Container>
		</>
	);
}
