import { Profile } from '../models/profile.js';

function index(req, res) {
	Profile.find({})
		.then((profiles) => {
			console.log(profiles)
			res.render('profiles/index', {
				profiles,
				title: 'Profiles',
			});
		})
		.catch((err) => {
			console.log(err);
			res.redirect(`/profiles/${req.user.profile._id}`);
		});
}

function show(req, res) {
	Profile.findById(req.params.id)
		.then((profile) => {
			Profile.findById(req.user.profile._id).then((self) => {
				const isSelf = self._id.equals(profile._id);
				res.render('profiles/show', {
					profile,
					title: `${profile.name}'s profile`,
					self,
					isSelf,
				});
			});
		})
		.catch((err) => {
			console.log(err);
			res.redirect(`/profiles/${req.user.profile._id}`);
		});
}

function addToCollection(req, res) {
	Profile.findById(req.user.profile._id)
	.then((profile) => {
		profile.anime.push(req.body);
		profile.save()
		.then(() => {
			res.redirect('/');
		});
	}).catch((err) => {
			console.log(err);
			res.redirect(`/profiles/${req.user.profile._id}`);
		});
}

function animeIdx(req, res) {
	Profile.findById(req.params.id).
	then((profile) => {
		res.render('profiles/animeIdx', {
			title: `${profile.name}'s Anime List`,
			user: req.user,
			profile,
		});
	});
}

function animeShow(req, res) {
	Profile.findById(req.params.profileId).then((profile) => {
		console.log(profile);
		let index = profile.anime.findIndex(
			(item) => item._id == req.params.animeId
		);
		res.render('profiles/animeShow', {
			title: `${profile.name}'s Anime`,
			user: req.user,
			profile,
			anime: profile.anime[index],
		});
	});
}

function deleteAnime(req, res) {
  Profile.findById(req.user.profile._id)
		.then((profile) => {
			
				profile.anime.remove(req.params.animeId);
				profile.save().then(() => {
					res.redirect(`/profiles/${req.user.profile._id}`);
				});
		})
		.catch((err) => {
			console.log(err);
			res.redirect(`/profiles/${req.user.profile._id}`);
		});
}

function createReview(req, res) {
	Profile.findById(req.user.profile._id)
		.then((profile) => {
			const anime = profile.anime.id(req.params.animeId)
			console.log(anime);
			anime.reviews.push(req.body)
			console.log(anime);
			profile.save();
		})
		.catch((err) => {
			console.log(err);
			res.redirect(`/profiles/${req.user.profile._id}`);
		});
}


export {
  index,
  show,
	addToCollection,
	animeIdx,
	animeShow,
	deleteAnime as delete,
	createReview,
}

// console.log('HAYYYYY');
// 	Profile.findById(req.params.profileId)
// 	.then(Profile => {
// 		profile.reviews.push(req.body);
// 		console.log(movie);
// 		profile.save()
// 			res.redirect(
// 				`/profiles/${req.params.profileId}/anime/${req.params.animeId}`
// 	    })	
// 		})