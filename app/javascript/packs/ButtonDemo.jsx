import React from 'react'
import { Button } from 'semantic-ui-react'

class ButtonDemo extends React.Component {

  render() {
    return (
    <Button onClick={() => console.log("Click!") }>
      A Demo Button
    </Button>
    )
  }
 
}

export default ButtonDemo
