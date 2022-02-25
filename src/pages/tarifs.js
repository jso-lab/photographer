import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const tiers = [
	{
		title: 'Free',
		price: '0',
		description: [
			'10 users included',
			'2 GB of storage',
			'Help center access',
			'Email support',
		],
		buttonText: 'Sign up for free',
		buttonVariant: 'outlined',
	},
	{
		title: 'Pro',
		subheader: 'Most popular',
		price: '15',
		description: [
			'20 users included',
			'10 GB of storage',
			'Help center access',
			'Priority email support',
		],
		buttonText: 'Get started',
		buttonVariant: 'contained',
	},
	{
		title: 'Enterprise',
		price: '30',
		description: [
			'50 users included',
			'30 GB of storage',
			'Help center access',
			'Phone & email support',
		],
		buttonText: 'Contact us',
		buttonVariant: 'outlined',
	},
];

function PricingContent() {
	return (
		<React.Fragment>
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
			{/* Hero unit */}
			<Container
				disableGutters
				maxWidth='sm'
				component='main'
				sx={{ pt: 8, pb: 6 }}>
				<Typography
					component='h1'
					variant='h2'
					align='center'
					color='text.primary'
					gutterBottom>
					Tarifs et prestations
				</Typography>
				<Typography
					variant='h5'
					align='center'
					color='text.secondary'
					component='p'>
					Quickly build an effective pricing table for your potential customers
					with this layout. It&apos;s built with default MUI components with
					little customization.
				</Typography>
			</Container>
			{/* End hero unit */}
			<Container maxWidth='md' component='main'>
				<Grid container spacing={5} alignItems='flex-end'>
					{tiers.map((tier) => (
						// Enterprise card is full width at sm breakpoint
						<Grid
							item
							key={tier.title}
							xs={12}
							sm={tier.title === 'Enterprise' ? 12 : 6}
							md={4}>
							<Card>
								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{ align: 'center' }}
									subheaderTypographyProps={{
										align: 'center',
									}}
									sx={{
										backgroundColor: (theme) =>
											theme.palette.mode === 'light'
												? theme.palette.grey[200]
												: theme.palette.grey[700],
									}}
								/>
								<CardContent>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'baseline',
											mb: 2,
										}}>
										<Typography
											component='h2'
											variant='h3'
											color='text.primary'>
											${tier.price}
										</Typography>
										<Typography variant='h6' color='text.secondary'>
											/mo
										</Typography>
									</Box>
									<ul>
										{tier.description.map((line) => (
											<Typography
												component='li'
												variant='subtitle1'
												align='center'
												key={line}>
												{line}
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions>
									<Button fullWidth variant={tier.buttonVariant}>
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
			<Box>
				<Copyright />
			</Box>
		</React.Fragment>
	);
}

export default function Pricing() {
	return <PricingContent />;
}
