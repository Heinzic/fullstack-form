import styled from 'styled-components'
import './App.css'
import { Button } from 'antd'

const StyledButton = styled(Button)`
  background-color: red;
`

function App() {

  return (
    <>
      <StyledButton type='text'>ddd</StyledButton>
    </>
  )
}

export default App
