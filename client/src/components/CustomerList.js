import { useState, useEffect } from 'react'
import { Button, Card, CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function CustomerList() {

  const [customers, setCustomers] = useState([])
  const navigate = useNavigate()

  const loadCustomers = async () => {
    const response = await fetch('http://localhost:4000/customers')
    const data = await response.json()
    setCustomers(data)
  }

  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/customers/${id}`, {
      method: 'DELETE',
    })

    setCustomers(customers.filter(customer => customer.id !== id));
  }

  useEffect(() => {
    loadCustomers()
  }, [])

  return (
    <>
      <h1>Customers List</h1>
      {
        customers.map((customer) => (
          <Card style={{
            marginBottom: "1.7rem",
            backgroundColor: 'lightgray'
            }}
            key={customer.id}
          >
            <CardContent style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <div>
                <Typography>{customer.id}</Typography>
                <Typography>{customer.name}</Typography>
              </div> 
              <div>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => navigate(`/customers/${customer.id}/edit`) }
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => handleDelete(customer.id)}
                  style={{ marginLeft: ".5rem" }}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      }
    </>
  )
}
