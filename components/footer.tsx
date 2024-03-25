import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Separator } from './ui/separator';

const Footer = () => {
	return (
		<footer className='bg-primary text-background'>
			<div className='flex justify-center flex-wrap gap-10 p-1 md:p-6 md:container'>
				<div>
					<h2 className='text-xl font-bold uppercase '>Hà nội</h2>
					<Separator className='my-3' />
					<p>Đại học Công nghệ Đông Á</p>
					<p>Cơ sở đào tạo thực hành</p>
					<p>Quyết định thành lập số: 1777/QĐ-TTg</p>
					<p>Đường Trình Văn Bô, Nam Từ Liêm, Hà Nội</p>
					<p>Điện thoại: 0243.555.2008/ 024.2236.5888</p>
					<p>Email: tuyensinh@eaut.edu.vn</p>
				</div>
				<div>
					<h2 className='text-xl font-bold uppercase'>Bắc ninh</h2>
					<Separator className='my-3' />
					<p>Đại học Công nghệ Đông Á</p>
					<p>Quyết định thành lập số: 1777/QĐ-TTg</p>
					<p>Làng đại học, Phường Võ Cường, Bắc Ninh</p>
					<p>Điện thoại: 0243.555.2008/ 024.2236.5888</p>
					<p>Email: tuyensinh@eaut.edu.vn</p>
				</div>
				<div className='font-bold'>
					<h2 className='text-xl uppercase'>Social Network</h2>
					<Separator className='my-3' />
					<div className='flex gap-3 pb-2'>
						<div className='h-[32px] w-[32px] cursor-pointer rounded-lg bg-blue-400 p-1 hover:bg-blue-500/80'>
							<Facebook />
						</div>
						<div className='h-[32px] w-[32px] cursor-pointer rounded-lg bg-violet-400 p-1 hover:bg-violet-500/80'>
							<Instagram />
						</div>
						<div className='h-[32px] w-[32px] cursor-pointer rounded-lg bg-red-400 p-1 hover:bg-red-500/80'>
							<Youtube />
						</div>
					</div>
					<p>CÁC ĐIỀU KHOẢN</p>
					<Separator className='my-3' />
					<a href='#' className='block'>
						Điều khoản sử dụng
					</a>
					<a href='#' className='block'>
						Chính sách bảo mật thông tin
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
