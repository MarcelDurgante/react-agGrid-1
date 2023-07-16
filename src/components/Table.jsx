import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const Table = () => {

  const data = [
    { name: 'Marcel', age: 30 },
    { name: 'Marilene', age: 65 },
    { name: 'Mikaela', age: 23 },
  ];

  const columns = [
    { headerName: 'Name', field: 'name', checkboxSelection: true },
    { headerName: 'Age', field: 'age' }
  ]

  const defaultColDef = { sortable: true, editable: true, filter: true, floatingFilter: true };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={data} columnDefs={columns} defaultColDef={defaultColDef} />
    </div>
  )
}
