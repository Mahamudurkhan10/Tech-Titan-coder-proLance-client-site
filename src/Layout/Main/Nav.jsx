
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/Provider/AuthProvider";

export function Nav() {
    const {user,logOut} = useContext(AuthContext)
    const handleSignOut = ()=>{
          logOut()
    }
  return (
    <Navbar fluid rounded className="fixed z-10 container" >
      <Link to={'/'}>
        <Navbar.Brand >

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ProLance</span>
        </Navbar.Brand></Link>

      <div className="flex md:order-2">
        {
          user?
            <div>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img={user?.photoURL} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignOut} >Sign out</Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </div>
            :
            <div className="flex gap-3">
              <Link to={'/login'}><Navbar.Brand > <Button>Login </Button> </Navbar.Brand></Link>
              <Link to={'/signUp'}>  <Navbar.Brand  > <Button>SignUp </Button> </Navbar.Brand> </Link>
            </div>
        }


      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}
