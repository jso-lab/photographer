import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Album() {
	return (
		<ThemeProvider theme={theme}>
			<main>
				{/* Hero unit */}

				<Container
					style={{
						py: 1,
						display: 'flex',
						flexDirection: 'row',
					}}>
					<Grid xs={12} lg={6} md={6} sx={{ p: 2 }}>
						<Card>
							<CardMedia
								component='img'
								image='https://images.unsplash.com/photo-1581952976147-5a2d15560349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
								alt='Famille'
							/>
						</Card>
					</Grid>
					<Grid xs={12} lg={6} md={6} sx={{ p: 2 }}>
						<Card>
							<CardMedia
								component='img'
								image='https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
								alt='Famille'
							/>
						</Card>
					</Grid>
				</Container>
			</main>
		</ThemeProvider>
	);
}
