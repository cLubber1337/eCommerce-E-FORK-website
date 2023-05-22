import React, { useEffect } from "react"
import "./scss/app.scss"
import { Header } from "components/Header"
import { Home } from "pages/Home"
import { Route, Routes } from "react-router-dom"
import { PATHS } from "utils/paths"
import { fetchNamesCategories } from "features/categories/categoriesSlice"
import { useAppDispatch } from "features/store"
import { getAllProducts } from "features/products/productsSlice"
import ProductInfoCard from "pages/ProductInfoCard"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchNamesCategories())
    dispatch(getAllProducts())
  }, [dispatch])

  return (
    <>
      <Header />
      <div className="container">
        {/*<div className="grid-container">*/}
        {/*  <Navbar />*/}
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.PRODUCT} element={<ProductInfoCard />} />
        </Routes>
      </div>
      {/*</div>*/}
    </>
  )
}

export default App
