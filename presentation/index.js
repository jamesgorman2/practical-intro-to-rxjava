// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  S,
  Spectacle,
  Table,
  TableRow,
  TableItem,
  TableHeaderItem,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#FFAA44"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress='number'>
          <Slide bgColor="primary">
            <Heading size={1} fit textColor="black">
              A Practical Introduction to
            </Heading>
            <Heading size={1} fit lineHeight={1.5} textColor="black">
              RxJava
            </Heading>
            <Link href="https://github.com/jamesgorman2">
              <Text bold caps textColor="tertiary">James Gorman</Text>
            </Link>
          </Slide>

          <Slide>
            <Heading size={2}>
              Overview
            </Heading>
            <List>
              <ListItem>What are Reactive Extensions?</ListItem>
              <ListItem>Why did we choose Rx?</ListItem>
              <ListItem>Operating on streams</ListItem>
              <ListItem>Concurrency</ListItem>
              <ListItem>RxNetty</ListItem>
              <ListItem>Streaming data</ListItem>
              <ListItem>RxJava 2</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2}>
              What are Reactive Extensions?
            </Heading>
            <List>
              <Appear><ListItem>A tool for reactive programming</ListItem></Appear>
              <Appear><ListItem>Originally from Microsoft labs</ListItem></Appear>
              <Appear><ListItem>Now polyglot...</ListItem></Appear>
            </List>
            <Appear><Text>Java JavaScript C#
Scala
Clojure
C++
Lua
Ruby
Python
Groovy
JRuby
Kotlin
Swift
PHP
</Text></Appear>
          </Slide>
          <Slide notes="responsive resilient elastic message-driven<br/>Rx = Observables + LINQ + Schedulers\n">
            <Heading size={2}>
              Reactive Programming
            </Heading>
            <List>
              <Appear><ListItem>Popularised with the Reactive Manifesto...</ListItem></Appear>
              <Appear><ListItem>Badly described by Microsoft...</ListItem></Appear>
              <Appear><ListItem>Wikipedia...</ListItem></Appear>
              <Appear><ListItem>asynchnonous programming using observables</ListItem></Appear>
              <Appear><ListItem>...getting closer</ListItem></Appear>
              <Appear><ListItem>Programming with asynchronous* data streams**</ListItem></Appear>
            </List>
            <Appear>
              <div>
                <Text>* sometimes</Text>
                <Text>** Andre Staltz</Text>
              </div>
            </Appear>
          </Slide>
          <Slide notes="whole bunch of other similar paridigms - actors, scalaz, spark">
            <Heading size={2}>
              OK, so hang on, what is Rx?
            </Heading>
            <Table>
              <TableRow>
                <TableHeaderItem></TableHeaderItem>
                <TableHeaderItem>Single</TableHeaderItem>
                <TableHeaderItem>Collection</TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableHeaderItem>Pull</TableHeaderItem>
                <TableItem>Object&lt;T&gt;</TableItem>
                <TableItem>List&lt;T&gt;</TableItem>
              </TableRow>
              <TableRow>
                <TableHeaderItem><Appear><div>Push</div></Appear></TableHeaderItem>
                <TableItem><Appear><div>Future&lt;T&gt;</div></Appear></TableItem>
                <TableItem><Appear><div>Observable&lt;T&gt;</div></Appear></TableItem>
              </TableRow>
            </Table>
          </Slide>
          <Slide>
            <Heading size={2}>
              Why did we choose Rx?
            </Heading>
            <List>
              <ListItem>We are in a polyglot environment</ListItem>
              <ListItem>Dealing with moving data</ListItem>
              <ListItem>From unreliable clients</ListItem>
              <ListItem>Rx* provides a functional-lite way to write code</ListItem>
            </List>
            <Text><S type="bold">There are now major differences between different implementations of Rx</S></Text>
        </Slide>
          <Slide>
            <Heading size={2}>
              Operating on streams
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2}>
              Concurrency
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2}>
              RxNetty
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2}>
              Streaming data
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2}>
              RxJava 2
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
