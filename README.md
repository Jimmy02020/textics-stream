# textics-stream

> `text/ics-stream` is a node version of
> [textics](https://github.com/Jimmy02020/textics). Counts lines,
> words, chars and spaces for a stream of strings :shower:

```bash
npm install textics-stream
```

## API

```js
import TStream from "textics-stream";

const txtStream = new TStream();

// Start counting
myStream.pipe(txtStream);

// Get lat chunk stat result
txtStream.on("latChunkStat", result => {
  // result : {lines, words, chars, spaces}
});

// Get all stat counters
txtStream.getStat();
```

### Example

```js
import TStream from "textics-stream";
import fs from "fs";

// Create read stream for file you want to read form
const rStream = fs.createReadStream(myFile);

// Create TexticsStream instance
const txtStream = new TStream();

// Pass reading stream to textics
rStream.pipe(txtStream);

// For each chunk passed, give me the result
txtStream.on("latChunkStat", result => {
  // do something
});

// When done, give me the final result
rStream.on("end", () => {
  const { lines, words, chars, spaces } = txtStream.getStat();
});
```

### Related projects

- [textics](https://github.com/Jimmy02020/textics) - Using textics for browser.

- [packageSorter](https://github.com/jalal246/packageSorter) - Sorting packages
  for monorepos production.

- [builderz](https://github.com/jalal246/builderz) - Building your project with zero config.

- [corename](https://github.com/jalal246/corename) - Extracts package name.

- [get-info](https://github.com/jalal246/get-info) - Utility functions for
  projects production.

- [move-position](https://github.com/jalal246/move-position) - Moves element in given array form index-A to index-B

## Tests

```sh
npm test
```

## License

This project is licensed under the [GPL-3.0 License](https://github.com/Jimmy02020/textics-stream/blob/master/LICENSE)
