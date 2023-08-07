import React from 'react'
import MUIDatatable from 'mui.datatables';
import { createTheme, ThemeProvider}  from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
      mode:'dark'
  }
})

export class TableBasic extends React.Component{
  render(){
    
    const columns = ['timeStamp', 'tipo', 'usuario', 'motivo', 'sistema', 'acciones' ]
    const data = 
    ['08/01/2023', 'ERROR', 'Pedro Martin', 'Inicio de sesion exitiso', 'Cotiza', 'Ver Detalles']
    ['08/01/2023', 'LOG', 'Lucio Bertolini', 'Inicio de sesion fallido', 'Labora', 'Ver Detalles']
    ['08/01/2023', 'LOG', 'Andres Dordi', 'Cierre de sesion por inactividad', 'Farma', 'Ver Detalles']
    ['08/01/2023', 'LOG', 'Pedro Martin', 'Inicio de sesion exitiso', 'Cotiza', 'Ver Detalles']
    ['08/01/2023', 'LOG', 'Andres Dordi', 'Inicio de sesion exitiso', 'Labora', 'Ver Detalles']
    ['08/01/2023', 'MODIFI', 'Lucio Bertolini', 'Generacion de tickets de sistema ', 'Labora', 'Ver Detalles']
    ['08/01/2023', 'LOG', 'Pedro Martin', 'Cierre de sesion del Usuario', 'Cotiza', 'Ver Detalles']
    ['08/01/2023', 'ERROR', 'Andres Dordi', 'Inicio de sesion exitiso', 'Farma', 'Ver Detalles']
    ['08/01/2023', 'LOG', 'Lucio Bertolini', 'Inicio de sesion exitiso', 'Cotiza', 'Ver Detalles']

const options = { filterType: 'checkbox',}
return (
    <ThemeProvider theme={darkTheme}>
    <MUIDatatable
      title={'Lista de Empleados'}
      data={data}
      columns={columns}
      options={options}
    />
    </ThemeProvider>

    )
  }
}




  
  
