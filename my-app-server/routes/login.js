import { router } from './common';
import { login } from '../controllers/login';


/* GET home page. */
router.post('/login', login);

export default router;
