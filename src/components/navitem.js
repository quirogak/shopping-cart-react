import { useState } from "react";
import ItemsMenu from "./itemsmenu";

const NavItem = (props) => {
  const [content, setContent] = useState(props.title);
  const genItemsMenu = (items, contentHandler) => (
    <ItemsMenu contentHandler={contentHandler} items={items}></ItemsMenu>
  );

  return (
    <section onMouseEnter={genItemsMenu(props.items, setContent)}>
      {content}
    </section>
  );
};

export default NavItem;
