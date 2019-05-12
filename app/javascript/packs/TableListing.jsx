import React from 'react'
import { Table } from 'semantic-ui-react'
import ButtonDemo from './ButtonDemo'

class TableListing extends React.Component {

  render() {
    const {name, age, id, created_at, updated_at} = this.props.users[0]
    return (
  <div>
    <Table color='yellow' collapsing celled>
     <Table.Header > 
       <Table.Row>
         {this.TableHeaders()} 
       </Table.Row>
     </Table.Header>
     <Table.Body>
       <Table.Row>
         <Table.Cell>{id}</Table.Cell>
         <Table.Cell>{name}</Table.Cell>
         <Table.Cell>{age}</Table.Cell>
         <Table.Cell>{created_at}</Table.Cell>
         <Table.Cell>{updated_at}</Table.Cell>
         <Table.Cell><ButtonDemo/></Table.Cell>
       </Table.Row> 
    </Table.Body>
    </Table>
  </div>
    )
  }

  TableHeaders() { 
    let first = this.props.users[0]
    let headers = Object.keys(first)
    headers.push("Button")
    return headers.map((key, index) => {
      return <Table.HeaderCell key={index}>{key}</Table.HeaderCell>
    })
  }

  TableData() { 
   } 


}
export default TableListing
