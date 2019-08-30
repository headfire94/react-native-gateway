
import React from 'react';
import PortalEnter from '../lib/portal/portal-enter';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<PortalEnter />).toJSON();
  expect(tree).toMatchSnapshot();
});