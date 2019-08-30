/**
 * @jest-environment jsdom
 */
import { View } from "react-native";
import { mount } from "enzyme";
import React from "react";

import { PortalEnter, PortalExit, PortalProvider } from "../lib/index";

test("mounts correctly", () => {
  const ToPort = () => <View test-name="to-port" />;
  const App = (
    <PortalProvider>
      <View test-name="top">
        <PortalEnter name="example">
          <ToPort />
        </PortalEnter>
      </View>
      <PortalExit />
    </PortalProvider>
  );
  const wrapper = mount(App);

  expect(wrapper).toMatchSnapshot();
});

test("PortalExit contains ToPort component", () => {
  const ToPort = () => <View test-name="to-port" />;
  const App = (
    <PortalProvider>
      <View test-name="top">
        <PortalEnter name="example">
          <ToPort />
        </PortalEnter>
      </View>
      <PortalExit />
    </PortalProvider>
  );
  const wrapper = mount(App);

  expect(wrapper.find(PortalExit).find(ToPort)).toMatchSnapshot();
});
