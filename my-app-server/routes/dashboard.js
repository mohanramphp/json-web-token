import jwt from 'express-jwt';

import { router } from './common';
import { dashboard } from '../controllers/dashboard';



let auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});

router.get('/dashboard', auth, dashboard);

export default router;
