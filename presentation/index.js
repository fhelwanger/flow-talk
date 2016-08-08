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
        <Deck progress="bar" transition={["slide"]} transitionDuration={300}>
          <Slide bgColor="#363d42">
            <Heading>
              <Image src={images.logo} height={300} />
            </Heading>
            <Text caps textColor="white">
              Um verificador de tipos para JavaScript
            </Text>
          </Slide>
          <Slide>
            <Heading>O que é?</Heading>
            <List>
              <Appear><ListItem><S type="bold">Verificador</S> de tipos para JavaScript</ListItem></Appear>
              <Appear><ListItem>Consegue inferir tipos sem precisar informá-los</ListItem></Appear>
              <Appear><ListItem>Projetado para funcionar com a natureza dinâmica do JS</ListItem></Appear>
              <Appear><ListItem>Projetado para poder ser adotado gradualmente no projeto</ListItem></Appear>
              <Appear><ListItem>Mantido pelo Facebook</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading margin="0px 0px 40px 0px">Hello Flow!</Heading>
            <CodePane
              source={require("raw!../assets/examples/hello-flow.example")}
              lang="js"
              textSize="1em"
            />
          </Slide>
          <Slide>
            <Heading margin="0px 0px 40px 0px">Inferência</Heading>
            <CodePane
              source={require("raw!../assets/examples/inference.example")}
              lang="js"
              textSize="1em"
            />
          </Slide>
          <Slide>
            <Heading margin="0px 0px 40px 0px">Maybe types</Heading>
            <CodePane
              source={require("raw!../assets/examples/maybe.example")}
              lang="js"
              textSize="0.8em"
            />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
