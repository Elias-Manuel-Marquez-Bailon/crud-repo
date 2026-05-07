import Productos from './Productos';

function App() {
  return (
    <>
      <div style={{ 
        backgroundColor: '#282c34', 
        color: 'white', 
        padding: '20px', 
        textAlign: 'center' 
      }}>
        <h1>🛒 Sistema CRUD - Productos</h1>
        <p>Django + React + MySQL</p>
      </div>
      
      <Productos />
    </>
  )
}

export default App;