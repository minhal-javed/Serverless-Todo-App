import React, { useEffect, useState,useContext } from "react";
import { Container, Heading, Button, Flex, NavLink } from "theme-ui";
import {IdentityContext} from "../../identity-context";
import { Link } from "gatsby";



export default (props) => {
 
  const {user,identity:netlifyIdentity}=useContext(IdentityContext)

  return (
    <Container>
      <Flex sx={{ flexDirection: "column", padding: 4 }}>
        <Flex as="nav">
          <NavLink as={Link} to="/" p={2}>
            Home
          </NavLink>
          <NavLink as={Link} to="/app" p={2}>
            Dashboard
          </NavLink>
          {user && (
            <NavLink href='#!' p={2}>
            {user.user_metadata.full_name}
          </NavLink>    
          )}
          
        </Flex>

        <Heading as="h1">Get Stuff Done</Heading>

        <Button
          sx={{ marginTop: 2 }}
          onClick={() => {
            netlifyIdentity.open();
          }}
        >
          Login
        </Button>
        
      </Flex>
    </Container>
  );
};
