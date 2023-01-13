import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Cookie from 'js-cookie';


function App() {
  const [AX, setAX] = useState('')
  const [BX, setBX] = useState('')
  const [CX, setCX] = useState('')
  const [DX, setDX] = useState('')

  const [ORIGIN, setORIGIN] = useState('')
  const [DESTINATION, setDESTINATION] = useState('')

  const [STACK, setSTACK] = useState([])
  const PUSH = (a) => {
    setSTACK(STACK => [...STACK, eval(a)])
  }

  const POP = (a) => {
    if (STACK.length > 0) {
      let temp = STACK[STACK.length - 1]

      if (a == "AX") {
        setAX(temp)
      }
      else if (a == "BX") {
        setBX(temp)
      }
      else if (a == "CX") {
        setCX(temp)
      }
      else if (a == "DX") {
        setDX(temp)
      }
      setSTACK(STACK.slice(0, -1))
    }

  }

  const XCHGMEMORY = (a) => {
    let temp = Cookie.get(a)
    Cookie.set(a, eval(a), { expires: 366 })

    if (a == "AX") {
      setAX(temp)
    }
    else if (a == "BX") {
      setBX(temp)
    }
    else if (a == "CX") {
      setCX(temp)
    }
    else if (a == "DX") {
      setDX(temp)
    }

  }


  const MEMORYMOV = (a) => {
    Cookie.set(a, eval(a), { expires: 366 })
  }

  const MEMORYMOV1 = (a) => {
    let temp = Cookie.get(a)


    if (a == "AX") {
      setAX(temp)
    }
    else if (a == "BX") {
      setBX(temp)
    }
    else if (a == "CX") {
      setCX(temp)
    }
    else if (a == "DX") {
      setDX(temp)
    }


  }


  const XCHG = (a, b) => {
    let temp = eval(a)

    if (a == "AX") {
      setAX(eval(b))
    }
    else if (a == "BX") {
      setBX(eval(b))
    }
    else if (a == "CX") {
      setCX(eval(b))
    }
    else if (a == "DX") {
      setDX(eval(b))
    }


    if (b == "AX") {
      setAX(temp)
    }
    else if (b == "BX") {
      setBX(temp)
    }
    else if (b == "CX") {
      setCX(temp)
    }
    else if (b == "DX") {
      setDX(temp)
    }

  }


  const MOV = (a, b) => {
    if (a == "AX") {
      setAX(eval(b))
    }
    else if (a == "BX") {
      setBX(eval(b))
    }
    else if (a == "CX") {
      setCX(eval(b))
    }
    else if (a == "DX") {
      setDX(eval(b))
    }
  }

  return (
    <div className="App">
      <Form>

        <Form.Label htmlFor="AX">AX </Form.Label>
        <Form.Control
          type="text"
          id="AX"
          onChange={(event) => setAX(event.target.value)}
          value={AX}
        />
        <Form.Label htmlFor="BX">BX </Form.Label>
        <Form.Control
          type="text"
          id="BX"
          onChange={(event) => setBX(event.target.value)}
          value={BX}
        />
        <Form.Label htmlFor="CX">CX </Form.Label>
        <Form.Control
          type="text"
          id="CX"
          onChange={(event) => setCX(event.target.value)}
          value={CX}
        />
        <Form.Label htmlFor="DX">DX </Form.Label>
        <Form.Control
          type="text"
          id="DX"
          onChange={(event) => setDX(event.target.value)}
          value={DX}
        />

        <h3>ORIGIN</h3>
        <Form.Check
          name="group1"
          label="AX"
          type="radio"
          onClick={() => setORIGIN("AX")}
        />
        <Form.Check
          name="group1"
          label="BX"
          type="radio"
          onClick={() => setORIGIN("BX")}
        />
        <Form.Check
          name="group1"
          label="CX"
          type="radio"
          onClick={() => setORIGIN("CX")}
        />
        <Form.Check
          name="group1"
          label="DX"
          type="radio"
          onClick={() => setORIGIN("DX")}
        />
        <h3>DESTINATION</h3>
        <Form.Check
          name="group2"
          label="AX"
          type="radio"
          onClick={() => setDESTINATION("AX")}
        />
        <Form.Check
          name="group2"
          label="BX"
          type="radio"
          onClick={() => setDESTINATION("BX")}
        />
        <Form.Check
          name="group2"
          label="CX"
          type="radio"
          onClick={() => setDESTINATION("CX")}
        />
        <Form.Check
          name="group2"
          label="DX"
          type="radio"
          onClick={() => setDESTINATION("DX")}
        />
      </Form>
      <p> stack:
      {
        STACK[STACK.length - 1]
      } </p>
      <Button variant="danger" onClick={() => MOV(DESTINATION, ORIGIN)} >MOV</Button>
      <Button variant="danger" onClick={() => XCHG(DESTINATION, ORIGIN)} >XCHG</Button>
      <Button variant="danger" onClick={() => MEMORYMOV(ORIGIN)} >MEMORYMOV</Button>
      <Button variant="danger" onClick={() => MEMORYMOV1(DESTINATION)} >MEMORYMOV1</Button>
      <Button variant="danger" onClick={() => XCHGMEMORY(ORIGIN)} >XCHGMEMORY</Button>
      <Button variant="danger" onClick={() => PUSH(ORIGIN)} >PUSH</Button>
      <Button variant="danger" onClick={() => POP(ORIGIN)} > POP</Button>
    </div>
  );
}

export default App;
