import PlayerLists from './features/PlayerLists'
import AddPlayer from './features/AddPlayer'
import ShowTitulares from './features/showTitulares'

function App() {

  return (
    <>
      <div className="container open-sans-font">
        <ShowTitulares />
        <AddPlayer />
        <PlayerLists />
      </div>
    </>
  )
}

export default App
