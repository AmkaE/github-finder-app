import { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';
import Spinner from '../components/layout/Spinner';
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';

const User = () => {
	const { getUser, user, loading } = useContext(GithubContext);
	const params = useParams();

	useEffect(() => {
		getUser(params.login);
	}, []);

	const {
		name,
		type,
		avatar_url,
		location,
		bio,
		blog,
		twitter_username,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;

	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			{/* main wrapper div */}
			<div className='w-full mx-auto lg:w-10/12'>
				<div className='mb-4'>
					<Link to='/' className='btn btn-ghost'>
						Back To Search
					</Link>
				</div>

				<section className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
					{/* user's image */}
					<div className='custom-card-image mb-6 md:mb-0'>
						<div className='rounded-lg shadow-xl card image-full'>
							<figure>
								<img src={avatar_url} alt='' />
							</figure>
							<div className='card-body justify-end'>
								<h2 className='card-title mb-0'>{name}</h2>
								<p className='flex-grow-0'>{login}</p>
							</div>
						</div>
					</div>

					{/* user's info */}
					<div className='col-span-2'>
						<div className='mb-6'>
							<h2 className='text-3xl card-title'>
								{name}{' '}
								<span className='ml-2 mr-1 badge badge-success'>{type}</span>
								{hireable && (
									<span className='mx-1 badge badge-info'>Hireable</span>
								)}
							</h2>
							<p>{bio}</p>
							<div className='mt-4 card-actions'>
								<a
									href={html_url}
									target='_blank'
									rel='noreferrer'
									className='btn btn-outline'>
									Visit GitHub Profile
								</a>
							</div>
						</div>

						<div className='w-full rounded-lg shadow -md bg-base-100 stats'>
							{/* user's loction */}
							{location && (
								<div className='stat'>
									<p className='stat-title text-md'>Location</p>
									<p className='text-lg stat-value'>{location}</p>
								</div>
							)}

							{/* user's website */}
							{blog && (
								<div className='stat'>
									<p className='stat-title text-md'>Website</p>
									<p className='text-lg stat-value'>
										<a
											href={`https://${blog}`}
											target='_blank'
											rel='noreferrer'>
											{blog}
										</a>
									</p>
								</div>
							)}

							{/* user's twitter */}
							{twitter_username && (
								<div className='stat'>
									<p className='stat-title text-md'>Twitter</p>
									<p className='text-lg stat-value'>
										<a
											href={`https://twitter.com/${twitter_username}`}
											target='_blank'
											rel='noreferrer'>
											{twitter_username}
										</a>
									</p>
								</div>
							)}
						</div>
					</div>
				</section>

				<section className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
					{/* followers */}
					<div className='stat'>
						<span className='stat-figure text-secondary'>
							<FaUsers className='text-3xl md:text-5xl' />
						</span>
						<span className='stat-title pr-5'>Followers</span>
						<span className='stat-value pr-5 text-3xl md:text-4xl'>
							{followers}
						</span>
					</div>

					{/* following */}
					<div className='stat'>
						<span className='stat-figure text-secondary'>
							<FaUserFriends className='text-3xl md:text-5xl' />
						</span>
						<span className='stat-title pr-5'>Following</span>
						<span className='stat-value pr-5 text-3xl md:text-4xl'>
							{following}
						</span>
					</div>

					{/* public repos */}
					<div className='stat'>
						<span className='stat-figure text-secondary'>
							<FaCodepen className='text-3xl md:text-5xl' />
						</span>
						<span className='stat-title pr-5'>Public Repos</span>
						<span className='stat-value pr-5 text-3xl md:text-4xl'>
							{public_repos}
						</span>
					</div>

					{/* public gists */}
					<div className='stat'>
						<span className='stat-figure text-secondary'>
							<FaStore className='text-3xl md:text-5xl' />
						</span>
						<span className='stat-title pr-5'>Public Gists</span>
						<span className='stat-value pr-5 text-3xl md:text-4xl'>
							{public_gists}
						</span>
					</div>
				</section>
			</div>
		</>
	);
};

export default User;
