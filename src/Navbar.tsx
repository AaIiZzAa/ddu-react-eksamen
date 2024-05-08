import { Outlet, NavLink } from "react-router-dom";

function Navbar(props: any) {
  let backgroundColor = props.primaryColor;
  let secondaryColor = props.secondaryColor;

  if (backgroundColor === undefined) {
    backgroundColor = "#222F45";
  }

  if (secondaryColor === undefined) {
    secondaryColor = "#093F71";
  }

  return (
    <>
      <nav
        className="text-slate-200"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="flex flex-row justify-between w-1/3 ml-[10%] p-2">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { backgroundColor: secondaryColor } : {}
            }
            className={({ isActive }) =>
              isActive
                ? "bg-primary rounded-lg text-white font-bold p-4"
                : "p-4 hover:text-white"
            }
          >
            Forside
          </NavLink>
          <NavLink
            to="/skema"
            className={({ isActive }) =>
              isActive
                ? "bg-primary rounded-lg text-white font-bold p-4"
                : "p-4 hover:text-white"
            }
            style={({ isActive }) =>
              isActive ? { backgroundColor: secondaryColor } : {}
            }
          >
            Skema
          </NavLink>
          <NavLink
            to="/opgaver"
            className={({ isActive }) =>
              isActive
                ? "bg-primary rounded-lg text-white font-bold p-4"
                : "p-4 hover:text-white"
            }
            style={({ isActive }) =>
              isActive ? { backgroundColor: secondaryColor } : {}
            }
          >
            Opgaver
          </NavLink>
          <NavLink
            to="/beskeder"
            className={({ isActive }) =>
              isActive
                ? "bg-primary rounded-lg text-white font-bold p-4"
                : "p-4 hover:text-white"
            }
            style={({ isActive }) =>
              isActive ? { backgroundColor: secondaryColor } : {}
            }
          >
            Beskeder
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
