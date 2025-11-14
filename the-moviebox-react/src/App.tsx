import { MovieContent } from "./cases/movies/components/movie-content"
import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import { Navbar } from "./components/layout/navbar"
<<<<<<< HEAD
import { Highlight } from "./components/layout/highlight"
import { MovieContextProvider } from "./cases/movies/context/movie-context"
=======
>>>>>>> parent of 5a0251f (ATVB2-2)

function App() {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <main>
        <MovieContextProvider>
          <Highlight />
          <Navbar/>
          <MovieContent />
        </MovieContextProvider>
      </main>
      <Footer />
=======
     <Header />
     <main>
      <Navbar/>
      <MovieContent />
     </main>
     <Footer />
>>>>>>> parent of 5a0251f (ATVB2-2)
    </>
  )
}

export default App