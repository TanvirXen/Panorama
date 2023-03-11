import React from "react";
import {
  SwitcherDivider,
  SwitcherIcon,
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Switcher,
  HeaderPanel,
  SwitcherItem,
} from "@carbon/react";
export default function NavMobile() {
  return (
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="">
      <img src="/logoFull.svg" alt="" srcset="" />
      </HeaderName>{" "}
      <HeaderPanel aria-label="Header Panel" expanded>
        <Switcher aria-label="Switcher Container">
          <SwitcherItem isSelected aria-label="Link 1" href="#">
            Link 1
          </SwitcherItem>
          <SwitcherDivider />
          <SwitcherItem href="#" aria-label="Link 2">
            Link 2
          </SwitcherItem>
          <SwitcherItem href="#" aria-label="Link 3">
            Link 3
          </SwitcherItem>
          <SwitcherItem href="#" aria-label="Link 4">
            Link 4
          </SwitcherItem>
          <SwitcherItem href="#" aria-label="Link 5">
            Link 5
          </SwitcherItem>
          <SwitcherDivider />
          <SwitcherItem href="#" aria-label="Link 6">
            Link 6
          </SwitcherItem>
        </Switcher>
      </HeaderPanel>
    </Header>
  );
}
