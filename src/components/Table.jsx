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

  const defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
    floatingFilter: true,
    flex: 1
  };

  let gridApi;

  const onGridReady = params => {
    gridApi = params.api;
  }

  const onExportClick = () => {
    gridApi.exportDataAsCsv();
  }

  return (
    <div style={{
      height: 300,
      width: '100vh',
    }}
      className="ag-theme-alpine"
    >
      <button onClick={() => onExportClick()}>Export</button>
      <AgGridReact rowData={data} columnDefs={columns} defaultColDef={defaultColDef} onGridReady={onGridReady} />
    </div>
  )
}
