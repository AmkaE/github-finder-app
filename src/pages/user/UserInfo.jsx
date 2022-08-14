const UserInfo = ({ infoType, infoTypeName }) => {
	return (
		<>
			{infoType && (
				<div className='stat'>
					<p className='stat-title text-md'>{infoTypeName}</p>
					<p className='text-lg stat-value'>{infoType}</p>
				</div>
			)}
		</>
	);
};

export default UserInfo;
