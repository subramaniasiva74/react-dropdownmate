import React from 'react'

export const Dropdown = ({labelText, onChange, options}) => {
  return (
    <select name={labelText} defaultValue="default" onChange={(event) => onChange(event)}>
        <option value="default" disabled>Select {labelText}</option>
        {options.map((item, index) => <option value={item} key={index}>{item}</option> )}
    </select>
  );
}
