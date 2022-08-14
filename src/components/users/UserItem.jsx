import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
	return (
		<div className='card shadow-md compact side bg-base-100'>
			<div className='flex-row items-center space-x-4 card-body'>
				<div>
					<div className='avatar'>
						<div className='round-full shadow w-14 h-14'>
							<img src={avatar_url} alt='Profile Picture' />
						</div>
					</div>
				</div>
				<div>
					<h2 className='card-title mb-1'>{login}</h2>
					<Link
						to={`/user/${login}`}
						className='text-base-content text-opacity-40'>
						Visit Profile
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UserItem;
