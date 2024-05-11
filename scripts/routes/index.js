import { navbar, button } from "../../components";
import { addHeadContent, setGlobalStyles } from "../utils";

addHeadContent({route: "index", textStyles: true});
setGlobalStyles();
navbar("#navbar")
button()
