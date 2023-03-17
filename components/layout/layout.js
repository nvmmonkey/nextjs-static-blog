import { Fragment } from "react";
import MainNavigation from "./main-navigation";

function Layout(props) {
  <Fragment>
    <MainNavigation />
    <main>{props.children}</main>
  </Fragment>;
}

export default Layout;
