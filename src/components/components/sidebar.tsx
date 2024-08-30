'use client';
import React, { useEffect, useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '../ui/sidebar';
import {
	IconArrowLeft,
	IconBrandTabler,
	IconDeviceLaptop,
	IconMap,
	IconMapPin,
	IconMapPin2,
	IconMessage,
	IconMessage2,
	IconSettings,
	IconSun,
	IconTipJar,
	IconUserBolt,
} from '@tabler/icons-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { FaJar } from 'react-icons/fa6';
import { Button } from '../ui/button';
import { ThemeToggler } from '../ui/themeToggler';

export function SidebarComponent({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const links = [
		{
			label: 'Map',
			href: '/',
			icon: (
				<IconMapPin2 className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
			),
		},
		{
			label: 'Chats',
			href: '/chats',
			icon: (
				<IconMessage2 className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
			),
		},
		{
			label: 'Info',
			href: '/info',
			icon: (
				<IconDeviceLaptop className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
			),
		},
		{
			label: 'Settings',
			href: '/settings',
			icon: (
				<IconSettings className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
			),
		},
	];

	const [open, setOpen] = useState(false);
	return (
		<div
			className={cn(
				'rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-screen flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-screen'
			)}
		>
			<Sidebar open={open} setOpen={setOpen}>
				<SidebarBody className='justify-between gap-10'>
					<div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
						{open ? <Logo /> : <LogoIcon />}
						<div className='mt-8 flex flex-col gap-2'>
							{links.map((link, idx) => (
								<SidebarLink key={idx} link={link} />
							))}
						</div>
					</div>
					<div className='flex flex-col'>
						<ThemeToggler />
					</div>
					<div>
						<SidebarLink
							link={{
								label: 'Oleg Sazanovich',
								href: '#',
								icon: (
									<Image
										src='/static/images/oleg.png'
										className='h-7 w-7 flex-shrink-0 rounded-full'
										width={50}
										height={50}
										alt='Avatar'
									/>
								),
							}}
						/>
					</div>
				</SidebarBody>
			</Sidebar>
			{children}
		</div>
	);
}
export const Logo = () => {
	return (
		<Link
			href='/'
			className='font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20'
		>
			<LogoIcon />
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className='font-medium text-black dark:text-white whitespace-pre'
			>
				JamGram
			</motion.span>
		</Link>
	);
};
export const LogoIcon = () => {
	return (
		<Link
			href='/'
			className='font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20'
		>
			<IconTipJar className='text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0' />
		</Link>
	);
};
