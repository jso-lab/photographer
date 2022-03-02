import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Copyright from '../components/Copyright';
import Blog from '../components/Blog';
import FeaturedPost from '../components/FeaturedPost';
import DisplayImages from '../components/displayImages';

const mainFeaturedPost = {
	title: 'Charles CANTIN - Photographe',

	image: 'https://source.unsplash.com/random',
};
const featuredPosts = [
	{
		title: 'En extérieur',

		description:
			'La lumière naturelle est idéal pour révéler les couleurs. Vous choisissez le lieu qui vous convient et le moment idéal de la journée',
		image:
			'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
	},
	{
		title: 'En studio',

		description:
			'Vous êtes reçu dans mon studio après une prise de rendez-vous. Toute une installation de pointe pour faire un beau cadre',
		image:
			'https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
	},
];

export default function Index() {
	return (
		<React.Fragment>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
			/>
			<CssBaseline />
			<ResponsiveAppBar />
			<Blog post={mainFeaturedPost} />
			<Container>
				<Stack
					sx={{ pt: 4, pb: 4 }}
					direction='row'
					spacing={2}
					justifyContent='center'>
					<Typography
						variant='h5'
						align='center'
						color='text.secondary'
						component='p'
						sx={{ my: 4, mx: 1.5 }}>
						Bienvenue sur le site web de Charles Cantin - photographe.
						<br /> A travers des prestations de qualité, vous allez vous aimez
						autrement. <br />
						Chaque moment de la vie est mis en valeur par son expertise et ses
						compétences.
						<br />A travers des galleries de photos, découvrez ce qui vous
						attend lors d'une séance.
						<>
							<Button sx={{ my: 4, mx: 1.5 }}>Parcourir le site</Button>
						</>
					</Typography>
				</Stack>
				<Box display='flex' spacing={4}>
					{featuredPosts.map((post) => (
						<>
							<FeaturedPost key={post.title} post={post} />
						</>
					))}
				</Box>
				<Typography
					component='h1'
					variant='h2'
					align='center'
					color='text.primary'
					sx={{ pt: 8, pb: 6 }}
					gutterBottom>
					Galleries de photos
				</Typography>
				<DisplayImages />
			</Container>

			<Copyright />
		</React.Fragment>
	);
}
