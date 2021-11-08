import { Anime } from "../models/anime.js";

import axios from 'axios';
import { response } from "express";

function animeSearch(req, res) {
	console.log('user input', req.body.query);
	axios
		.get(
			`https://api.jikan.moe/v3/search/anime?q=${req.body.query}&page=1&limit=9`
		)
		.then((response) => {
			// console.log('this is response', response.data.results[0]);
			res.render('animes/results', {
				title: 'search results',
				results: response.data.results,
			});
		})
		.catch((err) => {
			console.log(err);
			res.redirect('/');
		});
}

function show(req, res) {
	// console.log(req.params.mal_id);
	axios
	.get(`https://api.jikan.moe/v3/anime/${req.params.mal_id}`)
	.then((response) => {
		Anime.findOne({mal_id: response.data.id})


		.then(anime => {
			res.render('animes/show', {
			title: 'Anime Details',
			apiResults: response.data,
			anime,
			userHasAnime: anime?.owner.some(profile =>profile._id.equals(req.user.profile._id))
		})
		});
		})
		.catch((err) => {
			console.log(err);
			res.redirect('/');
		});
}

export { 
  animeSearch,
	show,
};