import React from 'react'
import { Table } from 'semantic-ui-react'
import ButtonDemo from './ButtonDemo'

class TableListing extends React.Component {

  render() {
    const {name} = this.props.users[0]
    const {age} = this.props.users[0]
    return (
  <div>
    <Table color='yellow' collapsing celled>
     <Table.Header > 
       <Table.Row>
         <Table.HeaderCell>Name</Table.HeaderCell>
         <Table.HeaderCell>Age</Table.HeaderCell> 
         <Table.HeaderCell>ButtonDemo</Table.HeaderCell>
       </Table.Row>
     </Table.Header>
     <Table.Body>
       <Table.Row>
         <Table.Cell>{name}</Table.Cell>
         <Table.Cell>{age}</Table.Cell>
         <Table.Cell><ButtonDemo/></Table.Cell>
       </Table.Row> 
    </Table.Body>
    </Table>
  </div>
    )
  }
 
}

export default TableListing
