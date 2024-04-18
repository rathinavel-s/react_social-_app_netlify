import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Missing from "./components/Missing";
import Nav from "./components/Nav";
import NewPost from "./components/NewPost";
import Header from "./components/Header";
import PostPage from "./components/PostPage";
import {  Route, Routes } from "react-router-dom";
import EditPost from "./components/EditPost";
import { DataProvider } from "./context/DataContext";



function App() {
  


  return (

    <div className="App">

     <DataProvider>
      < Header title="RAGUL SOCIAL MEDIA" />

      <Nav />

      <Routes>
        <Route path="/" element={ <Home />} />

         <Route path="post" > 
         <Route index element={<NewPost />}/>
         
        <Route path=":id" element={<PostPage />}/>
        </Route>

        <Route path="/edit/:id" element =
        {<EditPost/>} >
        </Route>
        
       <Route path="/about" element={
        <About /> }/>
        <Route path="*" element={
        <Missing />}/>
      </Routes>
      
      <Footer />

      </DataProvider>
      
    </div>
  );
}

export default App;