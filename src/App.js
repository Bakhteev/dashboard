import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header'
import SidebarNav from './components/sidebar'

function App({ theme }) {
  console.log(theme)
  return (
    <div className="App">
      <Header />
        <SidebarNav />
        <Switch></Switch>
    </div>
  )
}

export default App
