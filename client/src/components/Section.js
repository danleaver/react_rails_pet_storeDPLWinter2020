import { Component } from 'react';

class Section extends Component {
  state = {
    editing: false,
    sectionName: this.props.section.name,
  }

  handleClick = () => {
    this.setState({editing: true})
  }

  handleChange = (e) => {
    this.setState({sectionName: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateSection(this.state.sectionName, this.props.section.id)
    this.setState({editing: false})
  }

  render () {

    return (
      <div style={{padding: "2rem"}}>
        {this.state.editing
          ? 
            <>
              <form onSubmit={this.handleSubmit} >
                <input
                  onChange={this.handleChange}
                  value={this.state.sectionName}
                  >
                </input>
                <button>Enter</button>
              </form>
            </>
          : 
            <>
              {this.props.section.name}
              <button onClick={this.handleClick}>Edit Section</button>
            </>
        }
      </div>
    )
  }
}

export default Section
