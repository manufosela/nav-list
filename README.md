# \<nav-list\> [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@manufosela/nav-list) [![Published on npmjs.com](https://img.shields.io/badge/npmjs-package-orange)](https://www.npmjs.com/package/@manufosela/nav-list) [![License: Apache-2.0](https://img.shields.io/badge/license-apache2.0-green)](https://www.apache.org/licenses/LICENSE-2.0)


@manufosela/nav-list is a Lit-Element webcomponent to draw a horizontal navigation list

## Demo
[nav-list codepen demo](https://codepen.io/manufosela/pen/MWjrrEW)


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
<nav-list selected="7">
  <ul>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
  </ul>
</nav-list>

<h3>With attributes nav-list demo</h3>
<nav-list selected="5&ndash;10">
  <ul>
    <li>&lt;3</li>
    <li>3&ndash;5</li>
    <li>5&ndash;10</li>
    <li>&gt;10</li>
  </ul>
</nav-list>
```

## Attributes
```code
[title] (String)
[selected] (String)
[fixed] (Boolean) (false by default)
[listen-events] (Boolean) (false by default)
```

## Listen Events
```code
navlist-last
navlist-next

(detail.id is mandatory)
```

## Dispatch Events
```code
navlist-changed (when new value is set)
```

## CSS vars
```css
    --width-list-element: auto;
    --height-list-element: auto;
    --border-radius-element: 0;
    --border-radius-selected-element: 0;
    --border-top-list-element: 2px solid transparent;
    --border-bottom-list-element: 2px solid transparent;
    --border-left-list-element: 2px solid transparent;
    --border-right-list-element: 2px solid transparent;
    --border-top-selected-element: 2px solid #cc3743;
    --border-bottom-selected-element: 2px solid #cc3743;
    --border-left-selected-element: 2px solid #cc3743;
    --border-right-selected-element: 2px solid #cc3743;
    --padding-list-element: 10px 20px;
    --padding-selected-element: 10px 13px;
```

## Install

First run `npm install` to install your element's dependencies.

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

* **Mánu Fosela** - *Web Developer* - [manufosela](https://github.com/manufosela)

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](https://www.apache.org/licenses/LICENSE-2.0) file for details