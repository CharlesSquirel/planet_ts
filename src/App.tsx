import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Structure from "./components/Structure/Structure";
import Surface from "./components/Surface/Surface";
import Nav from "./components/Nav/Nav";
import Overview from "./components/Overview/Overview";
import planets from "./data.json";
import merkuryImg from "./assets/planet-mercury.svg";
import venusImg from "./assets/planet-venus.svg";
import earthImg from "./assets/planet-earth.svg";
import marsImg from "./assets/planet-mars.svg";
import jupiterImg from "./assets/planet-jupiter.svg";
import saturnImg from "./assets/planet-saturn.svg";
import uranusImg from "./assets/planet-uranus.svg";
import neptuneImg from "./assets/planet-neptune.svg";
import merkuryStrImg from "./assets/planet-mercury-internal.svg";
import venusStrImg from "./assets/planet-venus-internal.svg";
import earthStrImg from "./assets/planet-earth-internal.svg";
import marsStrImg from "./assets/planet-mars-internal.svg";
import jupiterStrImg from "./assets/planet-jupiter-internal.svg";
import saturnStrImg from "./assets/planet-saturn-internal.svg";
import uranusStrImg from "./assets/planet-uranus-internal.svg";
import neptuneStrImg from "./assets/planet-neptune-internal.svg";
import mercurySrfImg from "./assets/geology-mercury.png";
import venusSrfImg from "./assets/geology-venus.png";
import earthSrfImg from "./assets/geology-earth.png";
import marsSrfImg from "./assets/geology-mars.png";
import jupiterSrfImg from "./assets/geology-jupiter.png";
import saturnSrfImg from "./assets/geology-saturn.png";
import uranusSrfImg from "./assets/geology-uranus.png";
import neptuneSrfImg from "./assets/geology-neptune.png";
import { theme } from "./components/GlobalStyle/theme";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function Root() {
  // const getPlanet = (planetName) => {
  //   const planet = planets.filter((planet) => planet.name === planetName);
  //   return planet;
  // };
  // console.log(planets.filter((planet) => planet.name === "Mercury"));

  const [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune] = planets;

  const [
    {
      overview: { size: mercurySize },
    },
    {
      overview: { size: venusSize },
    },
    {
      overview: { size: earthSize },
    },
    {
      overview: { size: marsSize },
    },
    {
      overview: { size: jupiterSize },
    },
    {
      overview: { size: saturnSize },
    },
    {
      overview: { size: uranusSize },
    },
    {
      overview: { size: neptuneSize },
    },
  ] = planets;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route index element={<Overview planet={mercury} img={merkuryImg} size={mercurySize} planetColor={"mercury"} />} />
              <Route path="/venus/overview" element={<Overview planet={venus} img={venusImg} size={venusSize} planetColor={"venus"} />} />
              <Route path="/earth/overview" element={<Overview planet={earth} img={earthImg} size={earthSize} planetColor={"earth"} />} />
              <Route path="/mars/overview" element={<Overview planet={mars} img={marsImg} size={marsSize} planetColor={"mars"} />} />
              <Route path="/jupiter/overview" element={<Overview planet={jupiter} img={jupiterImg} size={jupiterSize} planetColor={"jupiter"} />} />
              <Route path="/saturn/overview" element={<Overview planet={saturn} img={saturnImg} size={saturnSize} planetColor={"saturn"} />} />
              <Route path="/uranus/overview" element={<Overview planet={uranus} img={uranusImg} size={uranusSize} planetColor={"uranus"} />} />
              <Route path="/neptune/overview" element={<Overview planet={neptune} img={neptuneImg} size={neptuneSize} planetColor={"neptune"} />} />
              <Route path="/mercury/structure" element={<Structure planet={mercury} img={merkuryStrImg} size={mercurySize} planetColor={"mercury"} />} />
              <Route path="/venus/structure" element={<Structure planet={venus} img={venusStrImg} size={venusSize} planetColor={"venus"} />} />
              <Route path="/earth/structure" element={<Structure planet={earth} img={earthStrImg} size={earthSize} planetColor={"earth"} />} />
              <Route path="/mars/structure" element={<Structure planet={mars} img={marsStrImg} size={marsSize} planetColor={"mars"} />} />
              <Route path="/jupiter/structure" element={<Structure planet={jupiter} img={jupiterStrImg} size={jupiterSize} planetColor={"jupiter"} />} />
              <Route path="/saturn/structure" element={<Structure planet={saturn} img={saturnStrImg} size={saturnSize} planetColor={"saturn"} />} />
              <Route path="/uranus/structure" element={<Structure planet={uranus} img={uranusStrImg} size={uranusSize} planetColor={"uranus"} />} />
              <Route path="/neptune/structure" element={<Structure planet={neptune} img={neptuneStrImg} size={neptuneSize} planetColor={"neptune"} />} />
              <Route path="/mercury/surface" element={<Surface planet={mercury} img={merkuryImg} size={mercurySize} imgSecondary={mercurySrfImg} position={"Mercury"} planetColor={"mercury"} />} />
              <Route path="/venus/surface" element={<Surface planet={venus} img={venusImg} size={venusSize} imgSecondary={venusSrfImg} position={"Venus"} planetColor={"venus"} />} />
              <Route path="/earth/surface" element={<Surface planet={earth} img={earthImg} size={earthSize} imgSecondary={earthSrfImg} position={"Earth"} planetColor={"earth"} />} />
              <Route path="/mars/surface" element={<Surface planet={mars} img={marsImg} size={marsSize} imgSecondary={marsSrfImg} position={"Mars"} />} planetColor={"mars"} />
              <Route path="/jupiter/surface" element={<Surface planet={jupiter} img={jupiterImg} size={jupiterSize} imgSecondary={jupiterSrfImg} position={"Jupiter"} planetColor={"jupiter"} />} />
              <Route path="/saturn/surface" element={<Surface planet={saturn} img={saturnImg} size={saturnSize} imgSecondary={saturnSrfImg} position={"Saturn"} planetColor={"saturn"} />} />
              <Route path="/uranus/surface" element={<Surface planet={uranus} img={uranusImg} size={uranusSize} imgSecondary={uranusSrfImg} position={"Uranus"} planetColor={"uranus"} />} />
              <Route path="/neptune/surface" element={<Surface planet={neptune} img={neptuneImg} size={neptuneSize} imgSecondary={neptuneSrfImg} position={"Neptune"} planetColor={"neptune"} />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default Root;
