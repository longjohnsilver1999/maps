import React, { useState } from 'react';

const Regions = () => {
  const [rows, setRows] = useState([{ id: 1, name: '', country: '' }]);

  const handleAddRow = () => {
    setRows([...rows, { id: rows.length + 1, name: '', country: '' }]);
  };

  const handleRemoveRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleInputChange = (id, event) => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, [event.target.name]: event.target.value };
      }
      return row;
    });
    setRows(newRows);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td><input name="name" value={row.name} onChange={(e) => handleInputChange(row.id, e)} /></td>
              <td><input name="country" value={row.country} onChange={(e) => handleInputChange(row.id, e)} /></td>
              <td>
                <button onClick={() => handleRemoveRow(row.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default Regions;
