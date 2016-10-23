'use strict';

import path from 'path';
import development from './env/development';
import production from './env/production';

const defaults = {
  root: path.join(__dirname, '../..')
};

export default {
  development: Object.assign(development, defaults),
  production: Object.assign(production, defaults),
}[process.env.NODE_ENV || 'development'];