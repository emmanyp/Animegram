
import axios from 'axios';
import { response } from "express";

function animeSearch(req, res) {
	console.log('user input', req.body.query);
	axios
		.get(
			`https://api.jikan.moe/v3/search/anime?q=${req.body.query}&page=1&limit=9`
		)
		.then((response) => {
			res.render('animes/results', {
				title: 'search results',
				user: req.user,
				anime: response.data.results,
			});
		})
		.catch((err) => {
			console.log(err);
			res.redirect('/profiles/anime');
		});
}



export { 
  animeSearch,
};