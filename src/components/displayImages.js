import * as React from 'react';
import Container from '@mui/material/Container';

export default function QuiltedImageList() {
	return (
		<Container display='flex' style={{ py: 4 }}>
			<div
				sx={{
					width: '100%',
					height: 100,
				}}>
				<img
					src={
						'https://images.unsplash.com/photo-1546015720-b8b30df5aa27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
					}
					alt='Bébé'
					style={{ width: 450, height: 300, pr: 3 }}
				/>
			</div>

			<div
				style={{ p: 2 }}
				sx={{
					width: '90%',
					height: 100,
				}}>
				<img
					src={
						'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80'
					}
					alt='famille'
					style={{ width: 450, height: 300, mr: 2 }}
				/>
			</div>

			<div
				style={{ py: 2 }}
				sx={{
					width: '90%',
					height: 100,
				}}>
				<img
					src={
						'https://images.unsplash.com/photo-1501341810975-6a8bfd95c6ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=828&q=80'
					}
					alt='Mariage'
					style={{ width: 450, height: 300, m: 3 }}
				/>
			</div>
			<div
				style={{ py: 2 }}
				sx={{
					width: '90%',
					height: 100,
				}}>
				<img
					src={
						'https://images.unsplash.com/photo-1566516171511-1c411a59c8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
					}
					alt='Batême'
					style={{ width: 450, height: 300, m: 3 }}
				/>
			</div>
		</Container>
	);
}
