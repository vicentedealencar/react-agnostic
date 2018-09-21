import React from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'
import { Bar, Grid, GridItem, Map } from 'react-blessed-contrib'
import { ComponentsProvider } from 'react-agnostic'
// import { CartItem } from 'agnostic-components'

const blessedComponents = {
  View: 'box',
  Text: 'text'
}

const CartItem_ = props => (console.log('props keys', Object.keys(props)), <box {...props} />)

class App extends React.PureComponent {
  state = {
    x: 2,
    item: {
      name: 'ball',
      price: 2,
      amount: 3
    }
  }

  componentDidCatch(error) {
    this.setState({ error: error.message })
  }

  render() {
    const { x, item, error } = this.state

    return (
      <Grid rows={8} cols={8}>
        <GridItem row={0} col={0} rowSpan={4} colSpan={4} component={Map} options={{ label: 'World Map' }} />
        <GridItem row={0} col={4} rowSpan={4} colSpan={4} component={Bar} options={{ label: 'Barras' }}
          label="Server Utilization (%)"
          barWidth={4}
          barSpacing={6}
          xOffset={0}
          maxHeight={9}
          data={{
            titles: ['bar1', 'bar2'],
            data: [5, x]
          }} />
        {error ? (
          <GridItem row={4} col={0} rowSpan={4} colSpan={8} component={'box'} options={{ label: 'ERROR', content: error }} />
        ) : (
            <ComponentsProvider components={blessedComponents} >
              <GridItem row={4} col={0} rowSpan={4} colSpan={8} component={CartItem_} options={{ label: 'MYBOX', item }} />
            </ComponentsProvider>
          )}
      </Grid>
    )
  }
}

// Creating our screen
const screen = blessed.screen()

// Rendering the React app using our screen
render(<App />, screen)
