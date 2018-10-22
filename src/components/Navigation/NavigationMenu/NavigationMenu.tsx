import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import * as React from "react";
import { Link } from "react-router-dom";
import { IMenuItem } from "../Menu_Data";
export interface IProps {
  menus: IMenuItem[];
}
function NavigationMenu({ menus }: IProps) {
  return (
    <React.Fragment>
      <List>
        {menus.map((menu, index) => {
          return (
            <ListItem
              key={index}
              {...{ to: menu.link }}
              component={Link}
              button={true}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
}

export default NavigationMenu;
