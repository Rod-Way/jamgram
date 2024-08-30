import React, { useEffect, useState } from 'react';
import { Button } from './button';
import { IconSun } from '@tabler/icons-react';

export function ThemeToggler() {
	const [theme, setTheme] = useState('light'); // начальная тема

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setTheme(storedTheme);
			document.documentElement.classList.add(`${storedTheme}`);
		} else {
			document.documentElement.classList.add('light');
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		document.documentElement.classList.replace(`${theme}`, `${newTheme}`);
		localStorage.setItem('theme', newTheme);
	};
	return (
		<Button
			variant='outline'
			size='icon'
			className='flex flex-col flex-1 h-9 w-9 flex-shrink-0 overflow-y-auto overflow-x-hidden'
			onClick={toggleTheme}
		>
			<IconSun /> <div>Switch Theme</div>
		</Button>
	);
}
