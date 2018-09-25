<div align="center">
<h1>react-agnostic</h1>

<p>Platform agnostic react components</p>
</div>

<hr />

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## The problem

React is known to be a multi-platform UI library, but it is not that simple to get done. There are many renderers (as: react-dom, react-native, react-primitives, reactxp, react-blessed, react-tv, react-pdf, redocx, react-360, etc) which allow components to run in different platforms. When you write a component that dependends directly on a component specific to some platform, this means it wont run on any other platform.

## This solution

`react-agnostic` makes it so you can write your components without any direct dependencies from platform specific components. It applies inversion of control using react context pass around components.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
  - [`ComponentsProvider`](#componentsprovider)
  - [`withComponents`](#withcomponents)
- [Examples](#examples)
  - [Create React App](#create-react-app)
  - [Create React Native App](#create-react-native-app)
  - [Proton Native](#proton-native)
  - [ReactXP](#reactxp)
- [Inspiration](#inspiration)
  - [Renderers](#renderers)
- [Other Solutions](#other-solutions)
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```sh
npm install --save react-agnostic
```

## Usage

This library exports a component and a HOC (Higher Order Component)

- [ComponentsProvider](#componentsprovider)
- [withComponents](#withcomponents)

### `ComponentsProvider`

This component allows the components augmented by `withComponents` to access platform specific components.

At the top level of your app, setup specific platform components and render the `ComponentsProvider` component passing a `components` prop.

If you're using create-react-app, your App.js file would look something like this:

```jsx
import React from 'react'
import {ComponentsProvider} from 'react-agnostic'
import UpdateCartItem from './components/UpdateCartItem'

const Text = props => (
  <span
    {...props}
    style={{fontFamily: 'monospace', padding: 10, fontSize: 24}}
  />
)
const View = props => (
  <div
    {...props}
    style={{backgroundColor: '#222', padding: 20, color: 'white'}}
  />
)
const Button = props => (
  <button
    {...props}
    style={{
      border: '1px solid orange',
      display: 'inline',
      backgroundColor: 'gray',
      color: 'white',
      width: 30,
      height: 30,
      borderRadius: 15,
    }}
  />
)

const components = {
  View,
  Text,
  Button,
}

class App extends React.Component {
  state = {
    item: {
      name: 'ball',
      amount: 3,
    },
  }

  render() {
    return (
      <ComponentsProvider components={components}>
        <UpdateCartItem
          item={this.state.item}
          updateCartItem={item => this.setState({item})}
        />
      </ComponentsProvider>
    )
  }
}

export default App
```

### `withComponents`

This HOC injects a `components` that you to access specific platform components.

Example usage:

```jsx
import React from 'react'
import {withComponents} from 'react-agnostic'

const UpdateCartItem = ({item, updateCartItem, components}) => {
  const {Button, Text, View} = components

  return updateCartItem ? (
    <View>
      <Button
        disabled={item.amount <= 0}
        onClick={() => updateCartItem({...item, amount: item.amount - 1})}
      >
        -
      </Button>
      <Text>{item.amount}</Text>
      <Button
        onClick={() => updateCartItem({...item, amount: item.amount + 1})}
      >
        +
      </Button>
    </View>
  ) : (
    <Text>{item.amount}</Text>
  )
}

export default withComponents(UpdateCartItem)
```

## Examples

Begin by cloning this repository, then cd into it.

```sh
git clone https://github.com/vicentedealencar/react-agnostic
cd react-agnostic
```

### Create React App

[create-react-app][create-react-app]

```sh
cd examples/cra
npm install
npm start
```

### Create React Native App

[create-react-native-app][create-react-native-app]

```sh
npm install -g expo-cli
cd examples/crna
npm install
expo start
```

### Proton Native

[proton-native][proton-native]

```sh
cd examples/proton
npm install
npm start
```

### ReactXP

[reactxp][reactxp]

```sh
cd examples/reactxp
npm install

# web
npm web-watch
start index.html

# native
npm start
npm run android
npm run ios
```

## Inspiration

Repository based on [kcd-oss](https://github.com/kentcdodds/generator-kcd-oss)

Blog with many react supported renderers: https://dev.to/kayis/react-can-do-it-31di

### Renderers

- [react-native][react-native]
- [react-native-windows][react-native-windows]
- [react-primitives][react-primitives]
- [reactxp][reactxp]
- [proton-native][proton-native]
- [react-blessed][react-blessed]
- [react-pdf][react-pdf]
- [redocx][redocx]
- [react-360][react-360]

## Other Solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it
here!

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars.githubusercontent.com/u/1762868?v=3" width="100px;"/><br /><sub><b>Vicente de Alencar</b></sub>](https://vicentedealencar.com)<br />[💻](https://github.com/vicentedealencar/react-agnostic/commits?author=vicentedealencar "Code") [📖](https://github.com/vicentedealencar/react-agnostic/commits?author=vicentedealencar "Documentation") [🚇](#infra-vicentedealencar "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/vicentedealencar/react-agnostic/commits?author=vicentedealencar "Tests") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/vicentedealencar/react-agnostic.svg?style=flat-square
[build]: https://travis-ci.org/vicentedealencar/react-agnostic
[coverage-badge]: https://img.shields.io/codecov/c/github/vicentedealencar/react-agnostic.svg?style=flat-square
[coverage]: https://codecov.io/github/vicentedealencar/react-agnostic
[version-badge]: https://img.shields.io/npm/v/react-agnostic.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-agnostic
[downloads-badge]: https://img.shields.io/npm/dm/react-agnostic.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/react-agnostic
[license-badge]: https://img.shields.io/npm/l/react-agnostic.svg?style=flat-square
[license]: https://github.com/vicentedealencar/react-agnostic/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/vicentedealencar/react-agnostic/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/vicentedealencar/react-agnostic.svg?style=social
[github-watch]: https://github.com/vicentedealencar/react-agnostic/watchers
[github-star-badge]: https://img.shields.io/github/stars/vicentedealencar/react-agnostic.svg?style=social
[github-star]: https://github.com/vicentedealencar/react-agnostic/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20react-agnostic%20by%20%40vicentedealencar%20https%3A%2F%2Fgithub.com%2Fvicentedealencar%2Freact-agnostic%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/vicentedealencar/react-agnostic.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[react-native]: https://github.com/facebook/react-native
[react-native-windows]: https://github.com/Microsoft/react-native-windows
[react-primitives]: https://github.com/lelandrichardson/react-primitives
[reactxp]: https://github.com/Microsoft/reactxp
[react-blessed]: https://github.com/Yomguithereal/react-blessed
[react-blessed]: https://github.com/Yomguithereal/react-blessed
[react-pdf]: https://github.com/diegomura/react-pdf
[redocx]: https://github.com/nitin42/redocx
[react-360]: https://github.com/facebook/react-360
[create-react-app]: https://github.com/facebook/create-react-app
[create-react-native-app]: https://github.com/react-community/create-react-native-app
[proton-native]: https://github.com/kusti8/proton-native
