import { Button, Stack } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
function App() {
  return <Container>
    <Stack direction="horizontal" gap="2" className="mb-4">
      <h1 className="me-auto">Budget</h1>
      <Button variant="primary">Add Budget</Button>
      <Button variant="outline-primary">Add Expense</Button>
    </Stack>
  </Container>
}

export default App;
