import React from 'react'
import { Table } from 'semantic-ui-react'
import ButtonDemo from './ButtonDemo'
import { Checkbox } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'

class TableListing extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    users: this.props.users.map(function(x) {
      let id = x.id
      console.log(x.id);
      return {[id]: false};
    }),
    checked: true
  };
}

// note - need exception table,
// join to problem table,
// send that as data to frontend
// then, use exception: true||false
// as the state that the checkbox
// changes and that gets submitted.
  render() {
    const {name, age, id, created_at, updated_at} = this.props.users[0]
//console.log(this.props.users)
//console.log(state);
//let tableData = this.props.users.map(function(item) {
//  item.chkbox_status = false;
//  return item;
//});
//console.log(tableData);
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
            <Table.HeaderCell colSpan='6'><Form.Button floated='right' content='submit'/></Table.HeaderCell>

          </Table.Row>
        </Table.Footer>
      </Table>
    </Form>
  </div>
    )
  }



//  handleCheckboxChange = changeEvent => {
//    const { name } = changeEvent.target;
//    console.log(name);
//   this.setState({
  //  new_users: changeEvent.target.value
  //  });
//  }
//    this.setState(prevState => ({
  //    checkboxes: {
//        ...prevState.checkboxes,
//        [name]: !prevState.checkboxes[name]
//      }
//    }));
//}

  toggleCheckBox = () => {
    console.log("hello")
    //const checkBoxStatus = !(this.state.checked)
    //this.setState({checkBoxStatus});
    this.setState(prevState => ({
      checked: !prevState.checked
    }))
    console.log(this.state.checked)
    //console.log({checkBoxStatus})
 }


  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    console.log("submit fired")
  }

  tableHeaders() {
    let first = this.props.users[0]
    let headers = Object.keys(first)
    headers.push("For Exemption")
    return headers.map((header, index) => {
      return <Table.HeaderCell key={index}>{header}</Table.HeaderCell>
    })
  }

  tableRow() {
    let rows = this.props.users
    return rows.map((row, index) => {
      return ( <Table.Row key={index}>
                 <Table.Cell>{row.id}</Table.Cell>
                 <Table.Cell>{row.name}</Table.Cell>
                 <Table.Cell>{row.age}</Table.Cell>
                 <Table.Cell>{row.created_at}</Table.Cell>
                 <Table.Cell>{row.updated_at}</Table.Cell>
                 <Table.Cell>{<Checkbox  onChange={this.toggleCheckBox} index={index}/>}</Table.Cell>
               </Table.Row> )
    })
  }
}
export default TableListing
