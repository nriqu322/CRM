import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomerList from './components/CustomerList'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CustomerList />}></Route>
      </Routes>
    </Router>
  )
}

