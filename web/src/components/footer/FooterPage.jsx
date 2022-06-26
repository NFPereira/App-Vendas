import React from "react";
import {  Footer, Text, Anchor } from 'grommet';


const FooterPage = () => {
  return (
      <Footer background="brand" pad="medium">
        <Text>Copyright</Text>
        <Anchor label="About" />
      </Footer>
  );
}

export default FooterPage;