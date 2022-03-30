import React from 'react'; 
import LoginPage from './components/authforms/LoginPage'
import Header from './components/dashboardpages/Header'
import Dashboard from './components/dashboardpages/Dashboard'

const App = () => {
  
  return <Dashboard />
}

//eventually, the logic should read... 
//if logged in, show the dashboard and the header at the top. 
//if not logged in, show the login pages 
export default App