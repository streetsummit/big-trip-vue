const SYMBOLS =
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const makeId = (idLength = 6) => {
	let id = '';
	for (let i = 0; i < idLength; i++) {
		id += SYMBOLS.charAt(Math.floor(Math.random() * SYMBOLS.length));
	}
	return id;
};

export const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);