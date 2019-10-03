import React, { Fragment } from 'react';
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Grid from "./Components/Contents/Grid";


function App() {
  return (
    <Fragment>
      <Header />
      <Grid />
      <Footer />
    </Fragment>
  );
}

export default App;
