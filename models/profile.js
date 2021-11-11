import mongoose from 'mongoose'
const Schema = mongoose.Schema

const reviewSchema = new Schema(
	{
		content: String,
		rating: String,
		author: { type: Schema.Types.ObjectId, ref: 'Profile' },
	},
	{
		timestamps: true,
	}
);

const animeSchema = new Schema(
	{
		title: String,
		rank: Number,
		score: Number,
    synopsis: String,
		episodes: Number,
		imageUrl: String,
		reviews: [reviewSchema],
	},
	{
		timestamps: true,
	}
);
const profileSchema = new Schema({
  name: String,
  avatar: String,
  anime: [animeSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}