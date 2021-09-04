import {Pages} from "../constants";
import PageComponents from "../components/pages";
import InboxIcon from "../../assets/icons/inbox.svg";
import OutBoxIcon from "../../assets/icons/outbox.svg";
import TrashIcon from "../../assets/icons/trash.svg";
import SpamIcon from "../../assets/icons/spam.svg";
import ForumsIcon from "../../assets/icons/forums.svg";
import UpdatesIcon from "../../assets/icons/updates.svg";
import PromosIcon from "../../assets/icons/promos.svg";
import PurchasesIcon from "../../assets/icons/purchases.svg";
import SocialIcon from "../../assets/icons/social.svg";

const factory = ( id, title, children, Icon, leaf = false ) => {
    const Component = PageComponents[ id ] ;
    return { id, title, Icon, children, Component, leaf }
}
const model = [
    factory( Pages.INBOX, "Inbox", [
        factory( Pages.LOREM_IPSUM, "Lorem ipsum", null, null, true ),
        factory( Pages.NEW_LINK, "New link", null, null, true ),
        factory( Pages.HOME_PAGE, "Home Page", null, null, true ) ,
    ], InboxIcon ),
    factory( Pages.OUTBOX, "Outbox", null, OutBoxIcon ),
    factory( Pages.TRASH, "Trash", null, TrashIcon ),
    factory( Pages.SPAM, "Spam", null, SpamIcon ),
    factory( Pages.FORUMS, "Forums", null, ForumsIcon ),
    factory( Pages.UPDATES, "Updates", null, UpdatesIcon ),
    factory( Pages.PROMOS, "Promos", null, PromosIcon ),
    factory( Pages.PURCHASES, "Purchases", null, PurchasesIcon ),
    factory( Pages.SOCIAL, "Social", null, SocialIcon ),

];

export default model ;