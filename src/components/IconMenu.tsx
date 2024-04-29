import { Menu, MenuButton, IconButton, MenuList, MenuItem, Link } from "@chakra-ui/react";
import { IconMenuProps, LinkObject } from "../models/objects";

export default function IconMenu(props: IconMenuProps) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={props.icon}
        variant='outline'
      />
      <MenuList backdropFilter="blur(50px)" bgColor="transparent">
        {
          props.items.map((item: LinkObject, index: number) => {
            return (
              <MenuItem bgColor="transparent" as={Link} href={item.link} textStyle="bodysm" textDecoration="none" key={index}>
                {item.name}
              </MenuItem>
            )
          })
        }
      </MenuList>
    </Menu>
  )
}

