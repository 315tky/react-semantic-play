import React from 'react'
import { Checkbox } from 'semantic-ui-react'

class CheckBox extends React.Component {

 state = {
   checked: true
 }

 toggleCheckBox = () => {
   console.log("hello")
   const checkBoxStatus = !(this.state.checked)
   this.setState({checkBoxStatus});
   console.log(this.state.checked)
 }
  render() {

    return (
   <Checkbox onChange={this.toggleCheckBox}/>
    )
  }
}
export default CheckBox
