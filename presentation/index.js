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
          <Slide notes="facebook tem mais de 50% de cobertura; flow coverage">
            <Heading>O que é?</Heading>
            <List>
              <Appear><ListItem><S type="bold">Verificador</S> de tipos para JavaScript</ListItem></Appear>
              <Appear><ListItem>Projetado para funcionar com a natureza dinâmica do JS</ListItem></Appear>
              <Appear><ListItem>Projetado para poder ser adotado gradualmente no projeto</ListItem></Appear>
              <Appear><ListItem>Consegue inferir tipos sem precisar informá-los</ListItem></Appear>
              <Appear><ListItem>Projetado para pegar a maior quantidade de bugs possível (soundness)</ListItem></Appear>
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
            <Heading margin="0px 0px 40px 0px">Instalação</Heading>
            <CodePane
              source={require("raw!../assets/examples/install.1.example")}
              lang="bash"
              textSize="1em"
            />
            <Text margin="30px 0px">Escrever código...</Text>
            <CodePane
              source={require("raw!../assets/examples/install.2.example")}
              lang="bash"
              textSize="1em"
            />
          </Slide>
          <Slide notes="flow nunca infere 'any'">
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
          <Slide>
            <Heading margin="0px 0px 40px 0px">Generics</Heading>
            <CodePane
              source={require("raw!../assets/examples/generics.example")}
              lang="js"
              textSize="0.8em"
            />
          </Slide>
          <Slide>
            <Heading margin="0px 0px 40px 0px">Object types</Heading>
            <CodePane
              source={require("raw!../assets/examples/object-types.example")}
              lang="js"
              textSize="0.8em"
            />
          </Slide>
          <Slide>
            <Heading margin="0px 0px 40px 0px">Union types</Heading>
            <CodePane
              source={require("raw!../assets/examples/union-types.example")}
              lang="js"
              textSize="0.8em"
            />
          </Slide>
          <Slide>
            <Heading margin="0px 0px 40px 0px">Classes</Heading>
            <CodePane
              source={require("raw!../assets/examples/classes.1.example")}
              lang="js"
              textSize="0.8em"
            />
          </Slide>
          <Slide notes="pode usar um tipo type Props = {...}">
            <Heading margin="0px 0px 40px 0px">Classes</Heading>
            <CodePane
              source={require("raw!../assets/examples/classes.2.example")}
              lang="js"
              textSize="0.8em"
            />
          </Slide>
          <Slide notes="build-in types; flow-typed">
            <Heading margin="0px 0px 40px 0px">Declarations</Heading>
            <CodePane
              source={require("raw!../assets/examples/declarations.example")}
              lang="js"
              textSize="0.8em"
            />
          </Slide>
          <Slide notes="Comentar dinâmica vs tipada">
            <Heading>Por que usar?</Heading>
            <List>
              <Appear><ListItem>JavaScript é uma linguagem dinâmica</ListItem></Appear>
              <Appear><ListItem>Ajuda a capturar erros mais cedo</ListItem></Appear>
              <Appear><ListItem>Ajuda na leitura do código</ListItem></Appear>
              <Appear><ListItem>Refatoração com mais segurança</ListItem></Appear>
              <Appear><ListItem>Suporte para IDE</ListItem></Appear>
              <Appear><ListItem>Verifica módulos em paralelo</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>Ferramentas</Heading>
            <List>
              <Appear><ListItem><Link href="https://github.com/flowtype/flow-typed">flow-typed</Link></ListItem></Appear>
              <Appear><ListItem><Link href="http://babeljs.io/docs/plugins/transform-flow-strip-types/">babel-transform-flow-strip-types</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://github.com/gajus/eslint-plugin-flowtype">eslint-plugin-flowtype</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://github.com/rtorr/vscode-flow">vscode-flow</Link></ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>E agora?</Heading>
            <List>
              <Appear><ListItem><Link href="https://flowtype.org">flowtype.org</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://medium.com/@thejameskyle/using-flow-with-babel-c04fdca8d14d#.lc6lrvmff">Setting up Flow when you’ve already got Babel in place</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://medium.com/@thejameskyle/flow-mapping-an-object-373d64c44592#.fbdcfqof8">Mapping an object</Link></ListItem></Appear>
              <Appear><ListItem><Link href="http://makeitopen.com/">F8 app</Link></ListItem></Appear>
              <Appear><ListItem><Link href="http://sitr.us/2015/05/31/advanced-features-in-flow.html">Advanced features in flow</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://www.youtube.com/watch?v=VEaDsKyDxkY">Flow Deep Dive</Link></ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="#363d42">
            <Heading>
              <Image src={images.logo} height={300} />
            </Heading>
            <Text caps textColor="white">
              <S type="strikethrough">Um verificador de tipos para JavaScript</S>
            </Text>
            <Appear>
              <Text caps textColor="white">
                Plataforma para inteligência de código
              </Text>
            </Appear>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
