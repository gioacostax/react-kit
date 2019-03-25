/**
 * Copyright © 2015-2019 gioacostax. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles/index.scss';

import App from 'src/app';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

/* devblock:start */
// React Hot Loader
// eslint-disable-next-line import/no-extraneous-dependencies
require('react-hot-loader/root').hot(App);
/* devblock:end */
