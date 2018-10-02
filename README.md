# \<nav-list\>



## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Demo

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="nav-list.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<h3>Basic nav-list demo</h3>
<nav-list></nav-list>

<h3>With attributes nav-list demo</h3>
<nav-list value="7" start="5" end="10"></nav-list>
```
