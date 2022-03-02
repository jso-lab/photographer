import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function QuiltedImageList() {
	return (
		<Container style={{ my: 4, mx: 1, display: 'flex', flexWrap: 'wrap' }}>
			<Grid xs={12} lg={6} md={6} sx={{ p: 2 }}>
				<div>
					<img
						src={
							'https://images.unsplash.com/photo-1546015720-b8b30df5aa27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
						}
						alt='Bébé'
						style={{ width: 500, height: 300 }}
					/>
				</div>

				<div style={{ p: 2 }}>
					<img
						src={
							'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80'
						}
						alt='famille'
						style={{ width: 500, height: 300 }}
					/>
				</div>
			</Grid>
			<Grid xs={12} lg={6} md={6} sx={{ p: 2 }}>
				<div style={{ py: 2 }}>
					<img
						src={
							'https://images.unsplash.com/photo-1501341810975-6a8bfd95c6ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=828&q=80'
						}
						alt='Mariage'
						style={{ width: 500, height: 300 }}
					/>
				</div>
				<div style={{ py: 2 }}>
					<img
						src={
							'https://images.unsplash.com/photo-1566516171511-1c411a59c8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
						}
						alt='Batême'
						style={{ width: 500, height: 300 }}
					/>
				</div>
			</Grid>
		</Container>
	);
}
