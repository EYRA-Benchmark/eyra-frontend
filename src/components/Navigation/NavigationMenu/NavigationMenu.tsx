import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import * as React from "react";

export interface IProps {
  menus: any;
}
function NavigationMenu({ menus }: IProps) {
  return (
    <React.Fragment>
      <List>
        {menus.map((menu: any, index: any) => {
          return (
            <ListItem key={index} button={true}>
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
