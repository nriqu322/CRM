import { Button, Card, CardContent, CircularProgress, Grid, Typography, TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function CustomerForm() {
  const [customer, setCustomer] = useState({
    name: "",
  })
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)

    if (editing) {
      await fetch(`http://localhost:4000/customers/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(customer),
      });
    } else {
      await fetch('http://localhost:4000/customers', {
        method: 'POST',
        body: JSON.stringify(customer),
        headers: { 'Content-Type': 'application/json' },
      })
    }

    setLoading(false);
    navigate('/');
  }

  const handleChange = (e) => {
    setCustomer({...customer, [e.target.name]: e.target.value})
  }

  const loadCustomer = async (id) => {
    const res = await fetch(`http://localhost:4000/customers/${id}`)
    const data = await res.json()
    setCustomer({name: data.name})
    setEditing(true)
  }

  useEffect(() => {
    if (params.id) {
      loadCustomer(params.id)
    }
  }, [params.id])

  return (
    <Grid container alignItems='center' direction="column" justifyContent='center'>
      <Grid item xs={ 5 }>
        <Card sx={{ mt: 5}}>
          <Typography variant='5' textAlign='center'>
            {editing ? "Edit Customer" : "Create Customer"} 
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant='filled'
                label='Customer Name'
                sx={{
                  display: 'block',
                  margin: '.5rem 0',
                }}
                name='name'
                value={customer.name}
                onChange={handleChange}
              />
              <Button variant='contained' color='primary' type='submit' disabled={!customer.name}>
                {loading ? <CircularProgress color="inherit" size={24} /> : 'Save'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
