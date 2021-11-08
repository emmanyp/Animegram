import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
	{
		content: String,
		rating: Number,
		author: { type: Schema.Types.ObjectId, ref: 'Profile' },
	},
	{
		timestamps: true,
	}
)

const animeSchema = new Schema({
	title: String,
	malId: Number,
	rating: String,
  rank: Number,
  epsoidos: Number,
  airing: Boolean,
	imageUrl: String,
	owner: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
  reviews:[reviewSchema]
},{
	timestamps: true
});

const Anime = mongoose.model('Anime', animeSchema);

export { 
  Anime 
};
