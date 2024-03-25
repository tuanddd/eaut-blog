import NavLink from './navlink';

const Links = () => {
	const routes = [
		{
			title: 'Home',
			path: '/',
		},
		{
			title: 'Blog',
			path: '/blog',
		},
		{
			title: 'Thư viện',
			path: 'https://lib.cndonga.edu.vn/opac/browsebycollection.aspx',
		},
		{
			title: 'About',
			path: '/thread/about-us',
		},
	];

	return (
		<>
			{routes.map((route) => (
				<NavLink key={route.path} item={route} />
			))}
		</>
	);
};

export default Links;
