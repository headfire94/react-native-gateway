import { View } from "react-native";
import renderer from "react-test-renderer";
import React from "react";

import { PortalEnter, PortalExit, PortalProvider } from "../lib/index";

test("renders correctly", () => {
  const App = (
    <PortalProvider>
      <View style={{ backgroundColor: "red" }}>
        <PortalEnter name="example">
          <View style={{ marginTop: 1 }} />
        </PortalEnter>
        <PortalEnter name="example-2">
          <View style={{ marginTop: 2 }} />
        </PortalEnter>
      </View>
      <PortalExit />
    </PortalProvider>
  );
  const tree = renderer.create(App).toJSON();
  expect(tree).toMatchSnapshot();
});
