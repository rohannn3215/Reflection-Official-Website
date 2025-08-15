import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';

// import ClickSpark from "./ui/ClickSpark/ClickSpark";
import Loader from './Components/Loader';
import logoHD from './assets/Reflection Logo HD.webp';

import { useEffect, useState } from 'react';

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Fallback timeout in case onComplete is not called for any reason
    const fallback = setTimeout(() => setShowLoader(false), 3000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <>
      {showLoader && (
        <Loader
          logoSrc={logoHD}
          totalDurationMs={2600}
          onComplete={() => setShowLoader(false)}
        />
      )}

      {/* Smooth fade-in for app content once loader completes */}
      <div className={`app-fade ${showLoader ? '' : 'ready'}`}>
        {/* <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        > */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        {/* </ClickSpark> */}
      </div>

      {/* Local styles for fade transition */}
      <style>{`
        .app-fade { opacity: 0; transition: opacity 500ms ease-in-out; }
        .app-fade.ready { opacity: 1; }
      `}</style>
    </>
  )
}

export default App
