# \<nav-list\> [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@manufosela/nav-list)
Polymer 3.0 webcomponent with lit-html to draw a horizontal navigation list


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
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="nav-list.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<h3>Default nav-list demo</h3>
<nav-list></nav-list>

<h3>With attributes nav-list demo</h3>
<nav-list value="7" list="5,6,7,8,9,10"></nav-list>

<h3>With attributes nav-list demo</h3>
<nav-list value="5&ndash;10" list="&lt;3,3&ndash;5,5&ndash;10,&gt;10"></nav-list>
```
