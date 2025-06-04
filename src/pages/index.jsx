import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Podcasty } from '../components/Podcasty';

const podcast1 = {
  num: "126",
  title: "Robot, který snědl koblihu",
  guest: "Radovan Siwek",
};

document.querySelector("#root").innerHTML = render(
    <div className="container">
      {
        <Podcasty/>
      }
    </div>
);
