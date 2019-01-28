import React from 'react';

const Input = (props) => {
	console.log(props.value);
	return (  
 <div>
    <input
      className="form-control"
      id={props.name}
      name={props.name}
      type={props.inputType}
      value={props.value}
      placeholder={props.placeholder} 
      onChange={props.handleChange}
      {...props} 
    />
</div>
)
}

export default Input;