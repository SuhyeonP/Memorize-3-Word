import { Route, Routes } from 'react-router-dom';
import { Home, HandBook, BluePen, MiniQuiz } from 'pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blue-pen" element={<BluePen />} />
      <Route path="/mini-quiz" element={<MiniQuiz />} />
      <Route path="/:handbook" element={<HandBook />} />
    </Routes>
  );
};
