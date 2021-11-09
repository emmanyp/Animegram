import mongoose from 'mongoose'
const Schema = mongoose.Schema

const reviewSchema = new Schema(
	{
		content: String,
		rating: Number,
		author: { type: Schema.Types.ObjectId, ref: 'Profile' },
	},
	{
		timestamps: true,
	}
);

const animeSchema = new Schema(
	{
		title: String,
		malId: Number,
		rank: Number,
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