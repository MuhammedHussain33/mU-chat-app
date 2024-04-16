import MessageContainer from "../../componenets/messages/MessageContainer"
import Sidebar from "../../componenets/sidebar/Sidebar"

const Home = () => {
  return (<div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0">
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
