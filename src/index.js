import ApnaReact from "./apna-react";
import ApnaReactDom from "./apna-react-dom";

const WelcomeMsg = ({ firstName, secondName }) => (
    <p>
        Welcome {firstName} {secondName}
    </p>
);
const App = (
    <div>
        <h1>Apna React</h1>
        <div>
            <p>This is our React Implementation</p>
        </div>
        <WelcomeMsg firstName={"Ashish"} secondName={"Kumar"} />
    </div>
);

ApnaReactDom.render(App, document.getElementById("root"));
