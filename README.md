# mlstring module
Multi-language string implementation

MLString can be used as simple string or string with any values.
Language ID is similar language in browsers f.e. en, en-us, en-gb, fr, it, ge, ru
MLString's main method is toString. It gets one optional parameter: language as string.
Default value is default language of browser

# How to install
```
npm install --save mlstring 
```

# How to use
## Creation MLString object
```ts
// importing module
import MLString from 'mlstring';

// u can use default language as u want. English is default in fragment below
// 
const strEst = new MLString({
        default: "estimated", 
        values: new Map([
            ["en-US", "expected"],
            ["de", "vermutet"],
            ["fr", "censé"],
            ["es", "supuesto"],
            ["uk", "очікуваний"],
            ["ru", "ожидаемый"]])
    });
```
## Use with default language in browser
```js
console.log(String(strEst)); // anywhere default casting to string
```
or
```js
console.log(strEst.toString());
```
## Static function getting default language ID string from browser
First, searching the 'lang' parameter in url (GET parameter, for exmpl: https://domain.com/chapter?lang=fr).
If 'lang' parameter is absent, then returned variable of language is assigned by the first preffered language from browser
