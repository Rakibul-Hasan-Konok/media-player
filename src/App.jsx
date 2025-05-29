import MenuBar from "./components/MenuBar";
import MediaPlayer from "./components/MediaPlayer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <MenuBar />
      <MediaPlayer />
      <Footer />
    </div>
  );
};

export default App;
