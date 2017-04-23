import { router } from './common';
import { registration } from '../controllers/register';


/* GET home page. */
router.post('/register', registration);

export default router;
