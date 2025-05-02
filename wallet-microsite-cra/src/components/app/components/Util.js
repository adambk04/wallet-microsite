export const isSourceEwallet = (location) =>{
	const search = location.search;
	const params = new URLSearchParams(search);
	return params.get('st') === 'ewallet';
}
