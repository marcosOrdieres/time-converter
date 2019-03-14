# time-converter

## Test

If you want to test this module, install this repository locally and run the following commands:

```
npm install
npm test
```

***

The description below is simulated, nothing was uploaded to npm.
It is only an example of how it will be if it was a npm module.

***

## Setup

```
npm install --save time-converter
```

## Usage

```javascript
const timeConverter = require('time-converter');
timeConverter(3600); // Output: '1:0:0'
timeConverter(60); // Output: '0:1:0'
timeConverter(60); // Output: '0:1:0'
// Invalid cases
timeConverter(-2000);   // Output: NaN (Not a number)
timeConverter(true); // Output: NaN (Not a number)
timeConverter({}); // Output: NaN (Not a number)
timeConverter(2000.4); // Output: NaN (Not a number)
```
