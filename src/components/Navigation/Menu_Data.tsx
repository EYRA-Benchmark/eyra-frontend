import DraftsIcon from "@material-ui/icons/Drafts";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SendIcon from "@material-ui/icons/Send";
import StarIcon from "@material-ui/icons/Star";
import * as React from "react";

export interface IMenuItem {
  text: string;
  icon: JSX.Element;
  link: string;
}

const menus: IMenuItem[] = [
  { text: "DashBoard", icon: <InboxIcon />, link: "/home" },
  { text: "Form Page", icon: <DraftsIcon />, link: "/form" },
  { text: "Table Page", icon: <StarIcon />, link: "/table" },
  { text: "Login Page", icon: <SendIcon />, link: "/login" }
];

export default menus;
