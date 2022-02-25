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
		title: 'Juste moi',
		prix: '130',
		description: ['Séance pour une personne', 'en extérieur ou en studio '],
	},
	{
		title: 'Famille *',
		prix: '220',
		description: [
			'Pour la famille ou les amis',
			'jusqu’à 4 personnes',
			'en extérieur ou en studio',
		],
	},
	{
		title: 'Pour deux',
		prix: '195',
		description: ['Séance pour une personne', 'en extérieur ou en studio '],
	},

	{
		title: 'Il était une fois',
		prix: '160',
		description: [
			'Photo de grossesse',
			'A votre domicile',
			'en extérieur ou en studio',
		],
	},
	{
		title: "J'immortalise l'évènement",
		description: [
			'sur mesure',
			'Prestation de mariage',
			'ou de baptême sur devis',
		],
	},
	{
		title: 'Mon bébé',
		prix: '100',
		description: ["Photo d'enfant", "jusqu'à 3 ans", 'à votre domicile'],
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
					component='p'
					sx={{ my: 4, mx: 1.5 }}>
					Je vous propose les prestations suivantes. Les thématiques ci-dessous
					ne sont pas exhaustives. Pour plus de renseignements, n'hésitez pas à
					me contacter. Nous verrons ensemble votre projet.
				</Typography>
			</Container>
			{/* End hero unit */}
			<Container maxWidth='md' component='main'>
				<Grid container spacing={5} alignItems='flex-end'>
					{tiers.map((tier) => (
						<Grid item key={tier.title} xs={12} sm={tier.title} md={4}>
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
											${tier.prix}
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
				<Typography sx={{ my: 5, mx: 1.5 }}>
					<div>
						*30 euros en supplément par personne au-delà de 4 (hormis enfant
						jusqu’à 2 ans)
					</div>
				</Typography>
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
