import express from 'express';
import Parse from 'parse/node';
import config from '../config';
import {isEmpty, APP_CONST} from '../helpers';

const Notification = Parse.Object.extend('Notification');

const router = express.Router();

/**
 * show push notification form
 */
router.get('/', (req, res, next) => {
  res.render('posts');
});

export default router;