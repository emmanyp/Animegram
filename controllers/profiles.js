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



export {
  index,
  show,
	addToCollection,
	animeIdx,
}