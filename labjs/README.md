# Using DataPipe with lab.js

*This guide assumes that you are already familiar with lab.js and that you have already followed the [getting started guide](https://pipe.jspsych.org/getting-started) on DataPipe to setup an experiment.*

### Use the scripts editor to call DataPipe

To call DataPipe in lab.js we can use `fetch()` inside a script. This call needs to happen after the last trial that collects meaningful data. One simple place to put it is on any debrief/final screen, selecting the
`before:prepare` event to trigger it.

We need to do three things in this script:

First, generate a random filename:

```js
function randomID(){
  const length = 10;
  let result = "";
  const chars = "0123456789abcdefghjklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

const filename = `${randomID()}-data.json`
```

Second, extract the JSON data from the internal storage of lab.js

```js
const dataJSON = study.internals.controller.datastore.exportJson();
```

Third, make a `fetch` request to DataPipe

```js
fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "ABCDEF123456",
    filename: filename,
    data: dataJSON,
  }),
});
```
