import * as ReactDOMClient from "react-dom/client";
import { App } from "./view/app";
import { GlobalStyle } from './styles/globalStyles';

const container = document.querySelector("#root");
const root = ReactDOMClient.createRoot(container);
root.render(<>
    <GlobalStyle />
    <App />
  </>
);
