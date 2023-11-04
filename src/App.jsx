import "./App.css";
import PhotoAlbum from "react-photo-album";
import photos from "./photos";

function App() {
  return <PhotoAlbum layout="rows" photos={photos} />;
}

export default App;
