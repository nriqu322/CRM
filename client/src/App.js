import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomerForm from './components/CustomerForm'
import CustomerList from './components/CustomerList'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CustomerList />} />
        <Route path='/customers/new' element={<CustomerForm />} />
      </Routes>
    </Router>
  )
}

