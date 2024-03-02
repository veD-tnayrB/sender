/*
 * Initialize library beyondJS backend server
 */
import { listen } from '@beyond-js/backend/listen';
import * as dotenv from 'dotenv';

dotenv.config();
listen();
