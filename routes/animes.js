import { Router } from 'express';
import * as animesCtrl from '../controllers/animes.js'
import { isLoggedIn } from '../middleware/middleware.js';

const router = Router();

//http://localhost:3000/animes/:id POST
router.get('/:mal_id', isLoggedIn, animesCtrl.show);

//http://localhost:3000/animes/search POST
router.post('/search', isLoggedIn, animesCtrl.animeSearch);


export { 
  router 
};
