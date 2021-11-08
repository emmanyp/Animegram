import { Router } from 'express';

import { isLoggedIn } from '../middleware/middleware.js';
import * as profilesCtrl from '../controllers/profiles.js';

const router = Router();

// localhost:3000/profiles - GET
router.get('/', isLoggedIn, profilesCtrl.index);
// localhost:3000/profiles - GET
router.get('/:id', isLoggedIn, profilesCtrl.show);

// localhost:3000/profiles/:id/cats - POST (Cat)
// router.post('/:id/cats', isLoggedIn, profilesCtrl.createCat);

// // localhost:3000/profiles/cats/:id - DELETE (Cat)
// router.delete('/cats/:id', isLoggedIn, profilesCtrl.deleteCat);

export { router };