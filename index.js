import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './nav'
import App from './app'
import ClientList from './client';
import "bootstrap/dist/css/bootstrap.min.css"

let Parent = () =>{
   return(
   <>
   <Navbar/>
   <App/>
   <ClientList/>
   </>
   )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent/>);


