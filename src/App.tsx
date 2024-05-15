import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./routes/List";
import Layout from "./components/Layouts/Layout";
import NoMatch from "./routes/NoMatch";
import Detail from "./routes/Detail";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="detail/:videoId" element={<Detail />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
