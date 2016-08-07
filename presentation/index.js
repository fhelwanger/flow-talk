import React from "react";

import {
  Deck,
  Heading,
  Image,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  logo: require("../assets/flow-logo.png")
};

preloader(images);

const theme = createTheme({
  primary: "#f4f4f4",
  secondary: "#333",
  tertiary: "#333",
  quartenary: "yellow"
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
          <Slide>
            <Text>...</Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
