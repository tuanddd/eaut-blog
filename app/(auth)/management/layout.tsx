import type { Metadata } from 'next';
import '@/app/globals.css';
import { inter } from '@/lib/fonts';
import Providers from '@/components/providers';
import Sidebar from '@/components/management/sidebar/sidebar';
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
	title: {
		default: 'Management | Dashboard',
		template: 'Management | %s',
	},
	description:
		'Quản lý trang thông tin dành cho sinh viên trường Đại học Công nghệ Đông Á (EAUT)',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className} text-foreground bg-secondary flex gap-3 pr-1`}>
				<Providers>
					<NextTopLoader />
					<Sidebar />
					<main className='flex flex-col w-full h-screen'>
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
