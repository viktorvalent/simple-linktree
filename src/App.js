import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/global/Header";
import Content from "./components/global/Content";
import Footer from "./components/global/Footer";

function App() {
  const [profile, setProfile] = useState(null);

  const getDataProfile = async () => {
    const data = await fetch("https://api.github.com/users/viktorvalent");
    const dataJSON = await data.json();

    setProfile(dataJSON);
    console.log(dataJSON);
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  if (!profile)
    return (
      <p style={{ textAlign: "center", fontStyle: "italic" }}>Loading..</p>
    );

  return (
    <>
      <Header
        name={profile.name}
        bio={profile.bio}
        avatar={profile.avatar_url}
      />
      <Content />
      <Footer name={profile.name} />
    </>
  );
}

export default App;
