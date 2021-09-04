import {Pages} from "../../constants";
import Home from "./home";
import Forum from "./forum";
import Any from "./any";

const pages = {
    [ Pages.INBOX ]: Any,
    [ Pages.OUTBOX ]: Any,
    [ Pages.TRASH ]: Any,
    [ Pages.SPAM ]: Any,
    [ Pages.FORUMS ]: Forum,
    [ Pages.UPDATES ]: Any,
    [ Pages.PROMOS ]: Any,
    [ Pages.PURCHASES ]: Any,
    [ Pages.SOCIAL ]: Any,
    [ Pages.LOREM_IPSUM ]: Any,
    [ Pages.NEW_LINK ]: Any,
    [ Pages.HOME_PAGE ]: Home
}

export default pages ;