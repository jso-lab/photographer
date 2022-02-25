import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignInSide() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
	};

	return (
		<ThemeProvider theme={theme}>
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
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 1 }}>
							<TextField
								margin='normal'
								required
								fullWidth
								id='email'
								label='Votre email'
								name='email'
								autoComplete='email'
								autoFocus
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								name='message'
								label='Votre message'
								type='text'
								id='message'
							/>
							<TextField
								placeholder='votre message ici'
								multiline
								rows={2}
								maxRows={4}
							/>

							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}>
								Envoyer
							</Button>

							<Box sx={{ my: 4 }}>
								<div>
									<Link to='/'>Accueil</Link>
								</div>
								<div>
									<Link to='/galleries'>Galleries</Link>
								</div>

								<Copyright />
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
