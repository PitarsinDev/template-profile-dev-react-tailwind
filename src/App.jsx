import { useState } from 'react'
import Snowfall from 'react-snowfall';
import './App.css'

import Nav from './App/Nav'
import Header from './App/Header'
import About from './App/About'
import Footer from './App/Footer';

<Snowfall
  snowflakeCount={300}
  snowflakeSize={{ min: 5, max: 10 }}
  interval={50}
/>


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Snowfall snowflakeCount={100} />
      <Nav />
      <Header />
      <About />
      <Footer />
    </>
  )
}

export default App
