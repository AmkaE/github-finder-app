const UserStat = ({ children, statType, statTypeName }) => {
	return (
		<div className='stat'>
			<span className='stat-figure text-secondary'>{children}</span>
			<span className='stat-title pr-5'>{statTypeName}</span>
			<span className='stat-value pr-5 text-3xl md:text-4xl'>{statType}</span>
		</div>
	);
};

export default UserStat;
