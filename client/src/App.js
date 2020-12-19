import { Component } from 'react'
import axios from 'axios';
import Section from './components/Section';

class App extends Component {
  state = {
    sections: ["hello"]
  }
  
  componentDidMount() {
    axios.get(`/sections`)
      .then(res => {
        this.setState({sections: res.data})
      })
  }
  
  updateSection = (incomingSection, incomingId) => {
    axios.put(`/sections/${incomingId}`, {name: incomingSection})
      .then(res => {
        const updatedSections = this.state.sections.map(section => {
          if (section.id === res.data.id) {
            return res.data
          }
          return section
        })
        this.setState({ sections: updatedSections })
      })
      .catch(console.log)
  }

  render () {
    return (
      this.state.sections.map(section => (
        <Section key={section.id} section={section} updateSection={this.updateSection}/>
        // <div key={section.id}>{section.name}</div>
      ))
    )
  }
}

export default App;
