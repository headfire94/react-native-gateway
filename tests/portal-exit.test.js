import React from "react";
import PortalExit from "../lib/portal/portal-exit";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<PortalExit />).toJSON();
  expect(tree).toMatchSnapshot();
});
