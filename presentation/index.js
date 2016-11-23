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

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  observable: require("../assets/observable.png"),
  flatMap: require("../assets/flatMap.c.png"),
  map: require("../assets/map.png"),
  concatMap: require("../assets/concatMap.png"),
  reduce: require("../assets/reduce.png"),
  distinct: require("../assets/distinct.png"),
  merge: require("../assets/merge.png"),
  filter: require("../assets/filter.png"),
  take: require("../assets/take.png"),
  zip: require("../assets/zip.o.png"),
  onErrorResumeNext: require("../assets/onErrorResumeNext.png"),
  retry: require("../assets/retry.png"),
  subscribeOn: require("../assets/subscribeOn.png"),
  observeOn: require("../assets/observeOn.png"),
  schedulers: require("../assets/schedulers.png"),
  debounce: require("../assets/debounce.png"),
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
          <Slide>
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
            <Appear><Text>Java JavaScript C# Scala Clojure C++ Lua Ruby Python Groovy JRuby Kotlin Swift PHP </Text></Appear>
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
                <TableHeaderItem>single items</TableHeaderItem>
                <TableHeaderItem>multiple items</TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableHeaderItem>synchronous</TableHeaderItem>
                <TableItem>T getData()</TableItem>
                <TableItem>Iterable&lt;T&gt; getData()</TableItem>
              </TableRow>
              <TableRow>
                <TableHeaderItem><Appear><div>asynchronous</div></Appear></TableHeaderItem>
                <TableItem><Appear><div>Future&lt;T&gt; getData()</div></Appear></TableItem>
                <TableItem><Appear><div>Observable&lt;T&gt; getData()</div></Appear></TableItem>
              </TableRow>
            </Table>
          </Slide>
          <Slide notes="key - we don't care what happens before or after we handle an event">
            <Heading size={2}>
              Right, it&#39;s events
            </Heading>
            <Table>
              <TableRow>
                <TableHeaderItem>event</TableHeaderItem>
                <TableHeaderItem>Iterable (pull)</TableHeaderItem>
                <TableHeaderItem>Observable (push)</TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableHeaderItem>retrieve data</TableHeaderItem>
                <TableItem>T next()</TableItem>
                <TableItem>onNext(T)</TableItem>
              </TableRow>
              <TableRow>
                <TableHeaderItem>discover error</TableHeaderItem>
                <TableItem>throws Exception</TableItem>
                <TableItem>onError(Exception)</TableItem>
              </TableRow>
              <TableRow>
                <TableHeaderItem>complete</TableHeaderItem>
                <TableItem>!hasNext()</TableItem>
                <TableItem>onCompleted()</TableItem>
              </TableRow>
            </Table>
          </Slide>
          <Slide>
            <Heading size={2}>
              And it&#39;s composable
            </Heading>
            <Table>
              <TableRow>
                <TableHeaderItem>Iterable (pull)</TableHeaderItem>
                <TableHeaderItem>Observable (push)</TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  <CodePane lang="java">{`getDataFromLocalMemory()
  .skip(10)
  .take(5)
  .map({ s -> return s + " transformed" })
  .forEach({ println "next => " + it })`}</CodePane>
                </TableItem>
                <TableItem>
                  <CodePane lang="java">{
`getDataFromNetwork()
.skip(10)
.take(5)
.map({ s -> return s + " transformed" })
.forEach({ println "next => " + it })`}</CodePane>
                </TableItem>
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
          <Slide notes="the observable">
            <Heading size={2}>
              Operating on streams
            </Heading>
            <Image src={images.observable.replace("/", "")} margin="40px" height="400px"/>
          </Slide>
          <Slide>
            <Heading size={2}>
              Operating on streams
            </Heading>
            <CodePane lang="java" margin="40px 0 0 0">{
`Observable<Shape> o = Observable.from(shapeList);
Subscription s = o.subscribe(
    shape -> doStuffWith(shape),
    error -> log(error),
    () -> thingsToDoOnCompletion()
  );
s.unsubscribe();`
            }</CodePane>
            <List>
              <ListItem>Hot - subscribe and unsubscribe do not change the observable</ListItem>
              <ListItem>Cold - each subscription executes the observable</ListItem>
              <ListItem>Publish - convert a cold observable to a hot observable</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2}>
              Operating on streams
            </Heading>
            <Image src={images.filter.replace("/", "")} margin="40px" height="200px"/>
            <Image src={images.take.replace("/", "")} margin="40px" height="200px"/>
          </Slide>
          <Slide>
            <Heading size={2}>
              Operating on streams
            </Heading>
            <Image src={images.merge.replace("/", "")} margin="40px" height="200px"/>
            <Image src={images.zip.replace("/", "")} margin="40px" height="200px"/>
          </Slide>
          <Slide>
            <Heading size={2}>
              Operating on streams
            </Heading>
            <Image src={images.map.replace("/", "")} margin="40px" height="200px"/>
          </Slide>
          <Slide>
            <Heading size={2}>
              Operating on streams
            </Heading>
            <Image src={images.flatMap.replace("/", "")} margin="40px" height="200px"/>
            <Image src={images.concatMap.replace("/", "")} margin="40px" height="200px"/>
          </Slide>
          <Slide>
            <Heading size={2}>
              Operating on streams
            </Heading>
            <Image src={images.reduce.replace("/", "")} margin="40px" height="200px"/>
            <Image src={images.distinct.replace("/", "")} margin="40px" height="200px"/>
          </Slide>
          <Slide>
            <Heading size={2}>
              Operating on streams
            </Heading>
            <Image src={images.retry.replace("/", "")} margin="40px" height="200px"/>
            <Image src={images.onErrorResumeNext.replace("/", "")} margin="40px" height="200px"/>
          </Slide>
          <Slide>
            <Heading size={2}>
              Concurrency
            </Heading>
            <List>
              <ListItem textSize="1em">Schedulers.computation() - event loop for computational and NIO work</ListItem>
              <ListItem textSize="1em">Schedulers.io() - an unbounded thread pool for blocking work</ListItem>
              <ListItem textSize="1em">Schedulers.from(executor) - use the give Executor as a Scheduler</ListItem>
              <ListItem textSize="1em">Schedulers.immediate() - schedules work to begin immediately in the current thread</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2}>
              Concurrency
            </Heading>
            <Image src={images.debounce.replace("/", "")} margin="40px" height="300px"/>
          </Slide>
          <Slide bgColor="white">
            <Heading size={2}>
              Concurrency
            </Heading>
            <Image src={images.subscribeOn.replace("/", "")} margin="40px" height="200px"/>
            <Image src={images.observeOn.replace("/", "")} margin="40px" height="200px"/>
          </Slide>
          <Slide bgColor="white">
            <Heading size={2}>
              Concurrency
            </Heading>
            <Image src={images.schedulers.replace("/", "")} margin="40px" height="480px"/>
          </Slide>
          <Slide>
            <Heading size={2}>
              RxNetty
            </Heading>
            <List>
              <ListItem>An RxJava wrapper for Netty</ListItem>
              <ListItem>NIO client and server connections as observables</ListItem>
              <ListItem>TCP and HTTP</ListItem>
              <ListItem>Executes on Netty&#39;s equivalent of the Computation Scheduler</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2}>
              RxNetty
            </Heading>
            <CodePane lang="java" margin="40px 0 0 0">{
`HttpServer<ByteBuf, ByteBuf> server =
  HttpServer.newServer(port)
  .start(
    (request, response) ->
      testIfOkToEcho(request)
        .flatmap(
          ok ->
            response.writeString(
              request.getContent()
                .compose(ByteBufToString.instance())
                .doOnNext(contentBlock -> System.out.println("Got block: " + contentBlock))
                .map(tring::toUpperCase)
        )
        .onErrorResumeNext(
          response.setStatus(HttpResponseStatus.UNAUTHORIZED)
            .writeString(Observable.just("Unauthorized"))
        )
      )
  );`
            }
            </CodePane>
          </Slide>
          <Slide>
            <Heading size={2}>
              RxNetty
            </Heading>
            <CodePane lang="java" margin="40px 0 0 0">{
`HttpClient.newClient(host, port)
    .followRedirects(true)
    .createGet(path)
    .addHeader("Authorization", String.format("Bearer %s", token))
    .timeout(timeout.getMillis(), TimeUnit.MILLISECONDS)
    .flatMap(response -> {
      final int code = response.getStatus().code();
      if (code >= 200 && code < 300) {
        return Observable.just(response);
      } else if (code == 401 || code == 403) {
        return response.getContent().compose(CollectBytes.all()).compose(ByteBufToString.instance())
          .flatMap(c -> Observable.error(new UnauthorisedUserException(request, code, c)));
      } else {
        return response.getContent().compose(CollectBytes.all()).compose(ByteBufToString.instance())
          .flatMap(c -> Observable.error(new ServerException(request, code, c)));
      }
    })
    .retry((attempts, e) -> attempts < 3 && e instanceof ServerException)
    .compose(ByteBufToString.instance())
    .subscribe(
      contentBlock -> System.out.println("Got block: " + contentBlock),
      error -> System.out.println(error),
      () -> System.out.println("No more bytes")
    );`
            }
            </CodePane>
          </Slide>
          <Slide>
            <Heading size={2}>
              Streaming data
            </Heading>
            <CodePane lang="java" margin="40px 0 0 0">{
`HttpServer<ByteBuf, ByteBuf> server =
  HttpServer.newServer(port)
  .start(
    (request, response) ->
      response.writeString(
        RxJson.newObject()  // Observable<JsonElement>
          .add(
            "links",
            RxJson.newArray(
              request.getContent()  // Observable<ByteBuf>
                .compose(ByteBufToString.instance())
                .compose(RxJsonGson.from("$._links.*.href").to(String.class))  // Json -> String
                .map(uri -> RxJson.newObject().add("url", RxJson.valueBuilder().create(uri)))
            )
          )
          .compose(RxJson.toJson())  // Observable<JsonElement> -> Observable<String>
      )
  );`
            }
            </CodePane>
          </Slide>
          <Slide>
            <Heading size={2}>
              Streaming data
            </Heading>
            <CodePane lang="java" margin="40px 0 0 0">{
`Table<Record> test = table("test");
Field<Integer> id = field("id", SQLDataType.INTEGER);

ConnectionPool pool = ConnectionPool.from(new PgHikariConnectionProvider(...));

Observable<Integer> ids = pool
  .execute(
    connection ->
      Select.using(
        connection,
        c -> using(c, SQLDialect.H2).select(id).from(test),
        r -> r.getValue(id)
      )
  )
  .subscribeOn(Schedulers.io());`
            }
            </CodePane>
          </Slide>
          <Slide>
            <Heading size={2}>
              RxJava 2
            </Heading>
            <List>
              <ListItem>nulls no longer accepted</ListItem>
              <ListItem>split Flowable with backpressure from Observable</ListItem>
              <ListItem>reactivestreams support</ListItem>
              <ListItem>more arity types</ListItem>
            </List>
          </Slide>
          <Slide notes="Dávid Karnok; David Moten">
            <Heading size={2}>
              Further Reading
            </Heading>
            <List>
              <ListItem><Link href="http://reactivex.io/">reactivex.io</Link></ListItem>
              <ListItem><Link href="http://rxmarbles.com/">rxmarbles.com</Link></ListItem>
              <ListItem><Link href="https://github.com/ReactiveX/RxJava/wiki">RxJava</Link></ListItem>
              <ListItem><Link href="https://akarnokd.blogspot.com">Advanced Reactive Java</Link></ListItem>
              <ListItem><Link href="https://github.com/Trunkplatform/tiny-rxjava-jdbc">tiny-rxjava-jdbc</Link></ListItem>
              <ListItem><Link href="https://github.com/davidmoten/rxjava-jdbc">rxjava-jdbc</Link></ListItem>
              <ListItem><Link href="https://github.com/Trunkplatform/rxjava-json">rxjava-json</Link></ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
