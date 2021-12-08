import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Axios from "axios";
import { API_BASE_URI } from './config';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import WorkoutPage from './pages/WorkoutPage';
import Exercises from './pages/Exercises';
import ExerciseLog from './pages/ExerciseLog';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Layout from './components/Layout';

const App = () => {
  Axios.defaults.baseURL = API_BASE_URI;
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem('token')),
  );
  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />;
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="workouts" element={<Workouts />} />
        <Route path="workouts/:workoutId" element={<WorkoutPage />} />
        <Route path="exercises" element={<Exercises />} />
        <Route path="exercises/:exerciseId" element={<ExerciseLog />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
