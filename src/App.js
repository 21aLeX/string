import { useState, useMemo } from 'react'
import NavigationBar from './component/NavigationBar.jsx'
import RandomStr from './component/RandomStr'
import Tables from './component/Table'

function App() {
  const [str, setStr] = useState([])
  const [strSearch, setStrSearch] = useState('')

  const sortedStr = useMemo(() => {
    if (str.length !== 0) {
      return str.filter(s => s.toLowerCase().includes(strSearch.toLowerCase()))
    }
    return str
  }, [strSearch, str])


  const GetStr = (e) => {
    e.preventDefault()
    const response = RandomStr.GetRandomStr(6)
    setStr([...str, response])
  }
  const GetSearch = (strSearch) => {
    setStrSearch(strSearch)
  }

  return (
    <div className="App" style={{ minHeight: '100vh', margin: 0 }}>
      <NavigationBar func={GetStr} GetSearch={GetSearch} />
      {sortedStr.length !== 0
        ? <Tables str={sortedStr} />
        : <Tables str='404' />
      }
    </div>
  );
}

export default App;
