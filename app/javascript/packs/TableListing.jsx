import React from 'react'
import { Table } from 'semantic-ui-react'
import ButtonDemo from './ButtonDemo'

class TableListing extends React.Component {

  render() {
    const {name, age, id, created_at, updated_at} = this.props.users[0]
console.log(this.props.users)
    return (
  <div>
    <Table color='yellow' collapsing celled>
     <Table.Header > 
       <Table.Row>
         {this.TableHeaders()} 
       </Table.Row>
     </Table.Header>
     <Table.Body>
       {this.TableRow()}
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

  TableRow() { 
    let rows = this.props.users
    return rows.map((row, index) => {
      return ( <Table.Row>
                 <Table.Cell>{row.id}</Table.Cell>
                 <Table.Cell>{row.name}</Table.Cell>
                 <Table.Cell>{row.age}</Table.Cell>
                 <Table.Cell>{row.created_at}</Table.Cell>
                 <Table.Cell>{row.updated_at}</Table.Cell>
                 <Table.Cell>{<ButtonDemo/>}</Table.Cell>
               </Table.Row> )
    })
  } 
 
}
export default TableListing
