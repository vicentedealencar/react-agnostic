import React from 'react'
import renderer from 'react-test-renderer'
import UpdateCartItem from '../UpdateCartItem'
import ComponentsProvider from '../../ComponentsProvider'

test('UpdateCartItem renders correctly', () => {
  const component = <UpdateCartItem
    updateCartItem={() => {}}
    item={{
      name: 'ball',
      amount: 3,
      price: 2,
    }} />
  const tree = renderer
    .create(component)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('UpdateCartItem renders with components passed by props', () => {
  const View = 'section'
  const Text = 'p'
  const Button = 'a'
  const components = {
    View,
    Text,
    Button,
  }

  const component = <UpdateCartItem
    components={components}
    updateCartItem={() => {}}
    item={{
      name: 'ball',
      amount: 3,
      price: 2,
    }} />
  const tree = renderer
    .create(component)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('UpdateCartItem renders with components passed by Provider', () => {
  const View = 'section'
  const Text = 'p'
  const Button = 'a'
  const components = {
    View,
    Text,
    Button,
  }

  const component = <ComponentsProvider components={components}>
    <UpdateCartItem
      updateCartItem={() => {}}
      item={{
        name: 'ball',
        amount: 3,
        price: 2,
      }} />
  </ComponentsProvider>
  const tree = renderer
    .create(component)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
