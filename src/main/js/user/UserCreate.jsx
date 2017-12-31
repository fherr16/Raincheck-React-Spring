import Component from 'react';

const CreateUser = onSubmit => (
  <form onSubmit={onSubmit}>
    <label>
      FirstName:
      <input name ="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
    </label>
    
    <label>
      LastName:
      <input name = "lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
    </label>
                
    <input type="submit" value="Submit" />
  </form>
)