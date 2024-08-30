import { SidebarComponent } from '@/components/components/sidebar';
import React from 'react';
import './styles.css';
import { GridBackground } from '@/components/components/gridBackground';

export default function Index() {
	return (
		<main>
			<SidebarComponent>
				<GridBackground />
			</SidebarComponent>
		</main>
	);
}
