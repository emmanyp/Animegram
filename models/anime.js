// import mongoose from 'mongoose';

// const Schema = mongoose.Schema;

// const reviewSchema = new Schema(
// 	{
// 		content: String,
// 		rating: Number,
// 		author: { type: Schema.Types.ObjectId, ref: 'Profile' },
// 	},
// 	{
// 		timestamps: true,
// 	}
// )

// const animeSchema = new Schema(
// 	{
// 		title: String,
// 		malId: Number,
// 		rank: Number,
// 		episodes: Number,
// 		airing: Boolean,
// 		imageUrl: String,
// 		collectedBy: {type: Schema.Types.ObjectId, ref: 'Profile'},
// 		reviews: [reviewSchema],
// 	},
// 	{
// 		timestamps: true,
// 	}
// );

// const Anime = mongoose.model('Anime', animeSchema);

// export { 
//   Anime 
// };
