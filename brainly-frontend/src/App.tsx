import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/plusicon'

function App() {
    return (
        <>
        <Button startIcon={<PlusIcon />} size = 'sm' varient='primary' text= "share"></Button>
        <Button size = 'md' varient='secondary' text= "Add Content"></Button>
        <Button startIcon={<PlusIcon />} size = 'lg' varient='secondary' text= "Add Content"></Button>
        </>
    )
}   

export default App
