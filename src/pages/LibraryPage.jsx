import { useContext } from "react"
import {InputContext} from '../App'
const LibraryPage = () => {
  const {search} = useContext(InputContext)
  return (
    <div>
      It is Library Page{search}
    </div>
  )
}

export default LibraryPage
