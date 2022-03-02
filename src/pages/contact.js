import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../components/Copyright';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SendMessage() {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<ThemeProvider theme={theme}>
			<ResponsiveAppBar />
			<Grid container component='main' sx={{ height: '100vh' }}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: 'url(https://source.unsplash.com/random)',
						backgroundRepeat: 'no-repeat',
						backgroundColor: (t) =>
							t.palette.mode === 'light'
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
						<Typography component='h1' variant='h5'>
							Formulaire de contact
						</Typography>
						<Box
							component='form'
							action='https://formspree.io/f/{form_id}'
							method='post'
							onSubmit={handleSubmit}
							sx={{ mt: 1 }}>
							<TextField
								margin='normal'
								required
								fullWidth
								id='email'
								label='Votre email'
								name='email'
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								name='message'
								label='Votre message'
								multiline
								rows={8}
								maxRows={10}
								type='text'
								id='message'
							/>

							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 5 }}>
								Envoyer
							</Button>

							<Box>
								<Copyright />
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
