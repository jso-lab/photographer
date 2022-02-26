import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function MainFeaturedPost(props) {
	const { post } = props;

	return (
		<Paper
			sx={{
				position: 'relative',
				backgroundColor: 'grey.800',
				color: '#fff',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				height: 600,
				backgroundImage: `url(${post.image})`,
			}}>
			{/* Increase the priority of the hero background image */}
			{
				<img
					style={{ display: 'none' }}
					src={post.image}
					alt={post.imageText}
				/>
			}

			<Box
				sx={{
					position: 'relative',
					p: { xs: 3, md: 6 },
					pr: { md: 0 },
				}}>
				<Typography
					component='h1'
					variant='h3'
					color='inherit'
					textAlign='center'
					paddingTop='15%'
					gutterBottom>
					{post.title}
				</Typography>
			</Box>
		</Paper>
	);
}

MainFeaturedPost.propTypes = {
	post: PropTypes.shape({
		description: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		imageText: PropTypes.string.isRequired,
		linkText: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired,
};

export default MainFeaturedPost;
