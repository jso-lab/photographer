import * as React from 'react';
import Album from '../components/Album';
import Link from '../components/Link';
import AppBar from '@mui/material/AppBar';
import Copyright from '../components/Copyright';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Galleries() {
	return (
		<>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
			/>
			<CssBaseline />
			<AppBar position='static' color='default'>
				<Toolbar sx={{ flexWrap: 'wrap' }}>
					<Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
						Charles Cantin - photographe
					</Typography>
					<nav>
						<Link
							variant='button'
							color='text.primary'
							href='/'
							sx={{ my: 1, mx: 1.5 }}>
							Accueil
						</Link>
						<Link
							variant='button'
							color='text.primary'
							href='galleries'
							sx={{ my: 1, mx: 1.5 }}>
							Galleries
						</Link>
						<Link
							variant='button'
							color='text.primary'
							href='tarifs'
							sx={{ my: 1, mx: 1.5 }}>
							Taris et prestations
						</Link>
						<Link
							variant='button'
							color='text.primary'
							href='contact'
							sx={{ my: 1, mx: 1.5 }}>
							Contact
						</Link>
					</nav>
				</Toolbar>
			</AppBar>
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
