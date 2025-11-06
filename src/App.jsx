
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";




// import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import { Loader } from "lucide-react";


function App() {

  

  return (
    <div>
      {/* <Navbar/> */}

      <Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<Home />} />
      {/* <Route path="/cryptocurrency" element={authUser ? <HomePage /> : <Navigate to="/login" />} /> */}
        {/* <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/cryptocurrency" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/cryptocurrency" />} />
        <Route path="/trending-crypto" element={authUser ? <TrendingPage /> : <Navigate to="/login" />} />
        <Route path="/top-gainers_losers" element={authUser ? <TopGainer /> : <Navigate to="/login" />} />
        <Route path="/highlights" element={authUser ? <Highlights /> : <Navigate to="/login" />} />
        <Route path="/high-volume" element={authUser ? <HighVolume /> : <Navigate to="/login" />} />
        <Route path="/cryptocurrency/search" element={authUser ? <SearchResults /> : <Navigate to="/login" />}/>
        <Route path="/cryptocurrency/:id" element={authUser ? <CoinDetails /> : <Navigate to="/login" />}/>
        <Route path="/cryptocurrency/news" element={authUser ? <NewsPage /> : <Navigate to="/login" />}/>
        <Route path="/watchlist" element={authUser ? <WatchlistPage /> : <Navigate to="/login" />} />
        <Route path="/portfolio" element={authUser ? <PortfolioPage/> : <Navigate to="/login" />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} /> */}
      </Routes>

        <Toaster/>

    </div>
  )
}

export default App
