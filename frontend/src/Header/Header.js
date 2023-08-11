import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate,Link} from "react-router-dom";
import { logout } from "../actions/userActions";

function Header({ setSearch }) {
  const dispatch = useDispatch();
const history = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userinfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history("/");
  };

  useEffect(() => {}, [userinfo]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        {/* <Navbar.Brand href="/">Note Zipper</Navbar.Brand> */}
        

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
            {userinfo && (
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )}
          </Nav>
         
          <Nav>
            {userinfo ? (
              <>
                <Nav.Link href="/home">Home</Nav.Link>
                <NavDropdown
                  title={`${userinfo.name}`}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item>
                    {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                      
                    /> */}
                    <Link to="/profile">
                    My Profile
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;