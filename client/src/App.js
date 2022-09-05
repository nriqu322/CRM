import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomerForm from './components/CustomerForm'
import CustomerList from './components/CustomerList'
import ProjectList from './components/ProjectList'
import ProjectForm from './components/ProjectForm'
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'
import MeetingList from './components/MeetingList'
import MeetingForm from './components/MeetingForm'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<CustomerList />} />
          <Route path='/customers/new' element={<CustomerForm />} />
          <Route path='/projects' element={<ProjectList />} />
          <Route path='/projects/new' element={<ProjectForm />} />
          <Route path='/contacts' element={<ContactList />} />
          <Route path='/contacts/new' element={<ContactForm />} />
          <Route path='/meetings' element={<MeetingList />} />
          <Route path='/meetings/new' element={<MeetingForm />} />
        </Routes>
      </Container>
    </Router>
  )
}