import { useEffect, useRef } from "react";
import { Route, Routes, useLocation, } from "react-router-dom";
import { AuthContainer } from "./components/containers/AuthContainer";
import { HeaderBtnContainer } from "./components/containers/HeaderBtnContainer";
import { ProtectedLayoutContainer } from "./components/containers/ProtectedLayoutContainer";
import { ContactWithHeaderBtn, FormWithHeaderBtn, Home, Login, Test } from "./components/pages";


const promptedPaths = ["/form"];

function App() {

  const { pathname } = useLocation();
  const prevPathName = useRef(pathname);

  useEffect(() => {
    if (promptedPaths.includes(prevPathName.current)) {
    } else {
    };
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route element={<AuthContainer />}>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedLayoutContainer />}>

            <Route path="/" element={<Home />} />

            {/* Using HOC */}
            <Route path="/form" element={<FormWithHeaderBtn />} />
            <Route path="/contact" element={<ContactWithHeaderBtn />} />

            {/* Using OutletContext */}
            <Route element={<HeaderBtnContainer />}>
              <Route path="/test" element={<Test />} />
            </Route>

          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
