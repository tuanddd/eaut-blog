import { Button } from '@/components/ui/button';
import { DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ForgotPasswordTab = () => {
	return (
		<>
			<DialogHeader className='my-5'>
				<DialogTitle>Forgot your password</DialogTitle>
				<DialogDescription>
					Type your email to get reset password link
				</DialogDescription>
			</DialogHeader>
			<div className='space-y-3'>
				<div className=''>
					<Label htmlFor='email'>Email</Label>
					<Input type='email' id='email' placeholder='Email' />
				</div>
				<div className='flex items-center justify-center'>
					<Button className='w-full'>Send </Button>
				</div>
			</div>
		</>
	);
};

export default ForgotPasswordTab;
