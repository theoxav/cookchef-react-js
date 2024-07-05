import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { seedRecipes } from "./data/seed";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

//seedRecipes();

const App = () => {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill d-flex flex-column">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default App;
