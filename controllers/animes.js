// import { Anime } from "../models/anime.js";
// import { Profile } from "../models/profile.js";

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
				user: req.user,
				anime: response.data.results,
			});
		})
		.catch((err) => {
			console.log(err);
			res.redirect('/profiles/anime');
		});
}

function createAnimes(req, res) {
	Anime.create({malId: response.data.mal_id})
		.then(anime => {
		anime.animes.push(response.data.results)
			anime.save()
			.then(() => {
				res.redirect('/');
			})
			})
		.catch((err) => {
			console.log(err);
			res.json(err);
		});
}




// function show(req, res) {

// 	axios
// 	.get(`https://api.jikan.moe/v3/anime/${req.params.mal_id}`)
// 	.then((response) => {
// 		Anime.findOne({malId: response.data.mal_id})
// 		.populate('collectedBy')
// 		.then(anime => {
// 			console.log('THIS IS RES', response.data.mal_id);
// 			console.log('LINE 35', collectedBy);
// 			res.render('animes/results', {
// 				title: 'Anime Details',
// 				apiResults: response.data,
// 				anime,
// 				Profile,
// 				userHasAnime: anime?.collectedBy.some(profile =>profile._id.equals(user.profile._id))
// 			})
// 		});
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.redirect('/');
// 		});
// }



// function removeFromList(req, res) {
// 	Anime.findOne({ mal_id: response.data.id })
// 		.then((anime) => {
// 			anime.owner.remove({ _id: req.user.profile._id });
// 			anime.save().then(() => {
// 				res.redirect(`/animes/${req.params.id}`);
// 			});
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.redirect('/');
// 		});		
// }

export { 
  animeSearch,
	createAnimes,
	// show,
	// addToCollection,
	// removeFromList,
};