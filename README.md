# react-native-gateway

> Render React-Native component into a new context (aka "Portal")

This can be used to implement various UI components such as modals.

## Installation

```sh
$ yarn add react-native-gateway
```

## Example

```js
import React from "react";
import { PortalEnter, PortalExit, PortalProvider } from "react-native-gateway";

const App = (
  <PortalProvider>
    <View>
      <PortalEnter name="example">
        <ToPort />
      </PortalEnter>
    </View>
    <PortalExit />
  </PortalProvider>
);
```

Will render as:

```js
<PortalProvider>
  <View>
    <PortalEnter name="example"></PortalEnter>
  </View>
  <PortalExit>
    <ToPort />
  </PortalExit>
</PortalProvider>
```

## Usage

To get started with react-native-gateway, first wrap your application in the
`<PortalProvider>`.

```diff
  import React from 'react';
+ import {
+   PortalProvider
+ } from 'react-native-gateway';

  const App = () => {
      return (
+       <PortalProvider>
          <View>
            {this.props.children}
          </View>
+       </PortalProvider>
      );
  }
```

Then insert a `<PortalExit>` whereever you want it to render.

```diff
  import React from 'react';
  import {
    PortalProvider,
+   PortalExit
  } from 'react-gateway';

  const App = () => {
      return (
        <PortalProvider>
          <View>
            {this.props.children}
+           <PortalExit />
          </View>
        </PortalProvider>
      );
  }
```

Then in any of your components (that get rendered inside of the
`<PortalProvider>`) add a `<PortalEnter>` and add `name` prop to it.

```diff
  import React from 'react';
+ import {PortalEnter} from 'react-native-gateway';

 const App = () => {
      return (
        <View>
+         <PortalEnter name="some-name">
+           Will render into the PortalExit.
+         </PortalEnter>
        </View>
      );
}
```
