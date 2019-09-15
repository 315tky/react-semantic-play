import React from 'react'
import { Checkbox } from 'semantic-ui-react'

class CheckBox extends React.Component {

 state = { 
   checkBoxStatus: true
 }
  render() {

    return (
   <Checkbox onChange={this.toggleCheckBox } />
    )
  }
}
export default CheckBox
