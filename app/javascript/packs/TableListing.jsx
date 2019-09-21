import React from 'react'
import { Table } from 'semantic-ui-react'
import ButtonDemo from './ButtonDemo'
import { Checkbox } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'

class TableListing extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    checkboxes: this.props.problems.map(function(x) {
      let id = x.id
      return {id: id, checked: false};
    })
  };
}
// note - need exception table,
// join to problem table,
// send that as data to frontend
// then, use exception: true||false
// as the state that the checkbox
// changes and that gets submitted.
  render() {

    const {category, created_at, detail, id, updated_at} = this.props.problems[0]

    return (
  <div>
    <Form onSubmit={this.handleFormSubmit}>
      <Table color='yellow' collapsing celled>
        <Table.Header >
          <Table.Row>
           {this.tableHeaders()}
          </Table.Row>
        </Table.Header>
        <Table.Body>
         {this.tableRow()}
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan='7'><Form.Button floated='right' content='submit'/></Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Form>
  </div>
    )
  }

  onToggle(problem_id, e) {
      this.setState(prevState => ({
        checkboxes: prevState.checkboxes.map(
        obj => (obj.id === problem_id ? Object.assign(obj, { checked: !obj.checked }) : obj)
        )
      }))
        console.log(this.state.checkboxes)
    }

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    console.log("submit fired")
    console.log(this.state.checkboxes)
    const url = `/home/create`
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        checkboxes: this.state.checkboxes 
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      credentials: 'include'
    }).then(res => res.json())
     .then(response => {
         //this.setState({ text:'', severity: 6, disabled: false })
         console.log('submitted')
       })
       .catch(error => console.error('Error:', error))
 }

  tableHeaders() {
    let first = this.props.problems[0]
    let headers = Object.keys(first)
    headers.push("For Exemption")
    return headers.map((header, index) => {
      return <Table.HeaderCell key={index}>{header}</Table.HeaderCell>
    })
  }

  tableRow() {
    let problems = this.props.problems
    return problems.map((problem, index) => {
      return ( <Table.Row key={index}>
                 <Table.Cell>{problem.id}</Table.Cell>
                 <Table.Cell>{problem.detail}</Table.Cell>
                 <Table.Cell>{problem.category}</Table.Cell>
                 <Table.Cell>{problem.created_at}</Table.Cell>
                 <Table.Cell>{problem.updated_at}</Table.Cell>
               <Table.Cell><Checkbox onChange={this.onToggle.bind(this, problem.id)}/></Table.Cell>
               </Table.Row> )
    })
  }
}
export default TableListing
