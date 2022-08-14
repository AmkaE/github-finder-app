import { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../../components/layout/Spinner';
import RepoList from '../../components/repos/RepoList';
import UserInfo from './UserInfo';
import UserStat from './UserStat';
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { getUserAndRepos } from '../../context/github/GithubActions';

const User = () => {
	const { user, repos, loading, dispatch } = useContext(GithubContext);

	const params = useParams();

	useEffect(() => {
		dispatch({ type: 'SET_LOADING' });
		const getUserAndUserRepos = async () => {
			const userData = await getUserAndRepos(params.login);

			setTimeout(() => {
				dispatch({ type: 'GET_USER_AND_REPOS', payload: userData });
			}, 500);
		};
		getUserAndUserRepos();
	}, [dispatch, params.login]);

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
							<UserInfo infoType={location} infoTypeName={'Location'} />

							{/* user's website */}
							<UserInfo infoType={blog} infoTypeName={'Website'} />

							{/* user's twitter */}
							<UserInfo infoType={twitter_username} infoTypeName={'Twitter'} />
						</div>
					</div>
				</section>

				<section className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
					{/* followers */}
					<UserStat statType={followers} statTypeName={'Followers'}>
						<FaUsers className='text-3xl md:text-5xl' />
					</UserStat>

					{/* following */}
					<UserStat statType={following} statTypeName={'Following'}>
						<FaUserFriends className='text-3xl md:text-5xl' />
					</UserStat>

					{/* public repos */}
					<UserStat statType={public_repos} statTypeName={'Public Repos'}>
						<FaCodepen className='text-3xl md:text-5xl' />
					</UserStat>

					{/* public gists */}
					<UserStat statType={public_gists} statTypeName={'Public Gists'}>
						<FaStore className='text-3xl md:text-5xl' />
					</UserStat>
				</section>
				<RepoList repos={repos} />
			</div>
		</>
	);
};

export default User;
