import { Anime } from "../models/anime.js";

import axios from 'axios';

function animeSearch(req, res) {
	console.log('user input', req.body.query);
	axios
		.get(`https://api.jikan.moe/v3/search/anime?q=${req.body.query}&page=1`)
		.then((response) => {
		console.log('this is response', response.data.results[0]);
		})
		.catch((err) => {
			console.log(err);
			res.redirect('/');
		});
}



export { 
  animeSearch,
};