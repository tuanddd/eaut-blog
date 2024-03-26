'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarItem = ({
	icon,
	text,
	path,
	className,
	expanded,
}: {
	icon: React.ReactNode;
	text: string;
	path: string;
	className?: string;
	expanded: boolean;
}) => {
	const pathname = usePathname();

	return (
		<Link
			href={path}
			className={cn(
				'relative flex items-center h-11 px-3 my-1 font-medium transition-colors rounded-md text-foreground group',
				`${path === pathname ? 'bg-primary/20 text-primary' : 'hover:bg-primary/30 hover:text-primary'}`,
				className
			)}
		>
			<div className='w-[24px] h-[24px]'>{icon}</div>
			<span
				className={cn('ml-3 w-full overflow-hidden transition-all', {
					'w-0 ml-0': expanded === false,
				})}
			>
				{text}
			</span>
			{!expanded && (
				<div className='absolute left-full rounded-md px-2 py-1 ml-6 invisible bg-primary text-background opacity-20 -translate-x-3 transition-all group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 whitespace-nowrap z-20'>
					{text}
				</div>
			)}
		</Link>
	);
};

export default SidebarItem;
