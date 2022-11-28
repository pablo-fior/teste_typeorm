import { sign } from 'jsonwebtoken';
import { User } from '../entities/user';
import logger from '../middlewares/logger';
import { auth } from '../config/index';
import { dataSource } from '../config/db/index';
import { hash } from '../config/index';

class AuthService {
    async auth(email: string, password: string) {
        const encryptedPass = hash(password)
        
        const user = await dataSource.getRepository(User).findOneBy({ email, password: encryptedPass });

        if (!user) {
            logger.error(`User not found with email ${email}`);
            throw new Error('User not found');
        }

        const token = sign({ id: user.id }, auth.secret, { expiresIn: auth.expiresIn });

        return { token };
    }
}

export default new AuthService();