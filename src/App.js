import React, {Component} from 'react';


class Item extends Component {
  render() {
    const { item } = this.props

    return (
      <div>
        { item.text }
      </div>
    )
  }
}

class App extends Component {
  state = {
    list: []
  }

  agregar = (e) => {
    e.preventDefault()
    const text = e.target[0].value
    const id = Math.random().toString(16)
    const pendiente = { text, id }
    this.setState( state => ({
      list: [
        ...state.list,
        pendiente
      ]
    }))
    e.target[0].value = ''
  }

  render () {

    return (
      <div>
        <h3>shouldComponentUpdate</h3>
        <form onSubmit={this.agregar}>
          <input 
            type="text" 
            placeholder='Ingresa tu pendiente' 
          />
          <button>
            Agregar
          </button>
        </form>
        <div>
          { this.state.list.map(item => (
            <Item 
              key={ item.id }
              item={ item }
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App