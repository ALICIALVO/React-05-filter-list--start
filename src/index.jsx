import * as ReactDOMClient from "react-dom/client";
import { App } from "./view/app";
import { GlobalStyles } from './styles/global.reset';

const container = document.querySelector("#root");
const root = ReactDOMClient.createRoot(container);
root.render(<>
    <GlobalStyles />
    <App />
  </>
);
