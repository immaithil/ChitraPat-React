import React, { Component } from 'react';

class List extends Component {
    render() {
      return (
       
          <ol>
            {this.props.tasks.map((ele, idx) => (
              <li key={idx}>{ele}</li>
            ))}
          </ol>
        
      );
    }
  }

  export default List;