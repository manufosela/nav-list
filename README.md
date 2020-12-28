# \<nav-list\> [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@manufosela/nav-list) [![Published on npmjs.com](https://img.shields.io/badge/npmjs-package-orange)](https://www.npmjs.com/package/@manufosela/nav-list) [![License: Apache-2.0](https://img.shields.io/badge/license-apache2.0-green)](https://www.apache.org/licenses/LICENSE-2.0)


/aur/license/:packageName

Lit-Element webcomponent to draw a horizontal navigation list


## Demo
[nav-list codepen demo](https://codepen.io/manufosela/pen/NmzdZo)


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

## Attributes
```code
list (separated comma list)
[title] (String)
[value] (String)
[fixed] (Boolean) (false by default)
[listen-events] (Boolean) (false by default)
```

## Listen Events
```code
navlist-last
navlist-next
```

## Dispatch Events
```code
navlist-changed (when new value is set)
```

## CSS vars
```css
--width-list-element (default: auto)
--height-list-element (default: auto)
--border-radius-element (default: 10px)
```

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ npm run start
```

## Running Tests

```
$ npm run test
```

## Build
```
$ npm run build
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

## Author

* **Mánu Fosela** - *Javascript Composer* - [manufosela](https://github.com/manufosela)

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](https://www.apache.org/licenses/LICENSE-2.0) file for details