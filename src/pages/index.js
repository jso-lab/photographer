import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Toolbar from '@mui/material/Toolbar';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Blog from '../components/Blog';
import FeaturedPost from '../components/FeaturedPost';

const mainFeaturedPost = {
	title: 'Charles CANTIN - Photographe',

	image: 'https://source.unsplash.com/random',
};
const featuredPosts = [
	{
		title: 'Featured post',
		date: 'Nov 12',
		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageLabel: 'Image Text',
	},
	{
		title: 'Post title',
		date: 'Nov 11',
		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageLabel: 'Image Text',
	},
];

export default function Index() {
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
			<Blog post={mainFeaturedPost} />
			<Stack sx={{ pt: 4 }} direction='row' spacing={2} justifyContent='center'>
				<Button variant='outlined'>Parcourir le site</Button>
			</Stack>
			<FeaturedPost post={featuredPosts} />

			<Copyright />
		</React.Fragment>
	);
}
