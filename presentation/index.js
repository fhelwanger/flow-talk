import React from "react";

import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  S,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/prism-vs.css");

const images = {
  logo: require("../assets/flow-logo.png")
};

preloader(images);

const theme = createTheme({
  primary: "#f4f4f4",
  secondary: "#363d42",
  tertiary: "#363d42",
  quartenary: "#363d42"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={300}>
          <Slide bgColor="#363d42">
            <Heading>
              <Image src={images.logo} height={300} />
            </Heading>
            <Text caps textColor="white">
              Um verificador de tipos para JavaScript
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
