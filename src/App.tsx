import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import { TaskDataProvider } from "./Data/taskDataContext"
function App() {
  return (
    <TaskDataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </TaskDataProvider>
  )
}

export default App
