import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { signIn } from 'next-auth/react';

const ThirdAppAuth = () => {
	return (
		<>
			<Button
				onClick={() => signIn('google')}
				className='w-full bg-red-500 hover:bg-red-500/80 dark:text-foreground'
			>
				Continue with Google
			</Button>
			<Separator className='my-4' />
		</>
	);
};

export default ThirdAppAuth;
