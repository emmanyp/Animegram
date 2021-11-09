import { Router } from 'express';

import { isLoggedIn } from '../middleware/middleware.js';
import * as profilesCtrl from '../controllers/profiles.js';

const router = Router();

// localhost:3000/profiles - GET
router.get('/', isLoggedIn, profilesCtrl.index);
// localhost:3000/profiles - GET
router.get('/:id', isLoggedIn, profilesCtrl.show);
router.get('/:id/anime', isLoggedIn, profilesCtrl.animeIdx);
router.post('/anime', isLoggedIn, profilesCtrl.addToCollection);




export { router };