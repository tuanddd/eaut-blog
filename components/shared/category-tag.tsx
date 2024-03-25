import { Category } from '@/type';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const CategoryTag = ({ data }: { data: Category; className?: string }) => {
	
	return (
		data && (
			<Link
				href={`/blog?cat=${data.slug}`}
				className={cn(
					'rounded-full px-2',
					`tag tag-${data.color}`,
				)}
			>
				{data.title}
			</Link>
		)
	);
};

export default CategoryTag;
