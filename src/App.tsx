import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import { TaskDataProvider } from "./Data/taskDataContext"
import { LoginDataProvider } from "./Data/loginDataContext"
function App() {
  return (
      <LoginDataProvider>
      <TaskDataProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </TaskDataProvider>
    </LoginDataProvider>
  )
}

export default App
