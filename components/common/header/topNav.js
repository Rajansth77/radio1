import useFetch from "api/useFetch";
import Link from "next/link";
import { useRouter } from "next/router";

const TopNav = () => {
  const { data: menu, error, isPending } = useFetch(
    "https://www.uniquefm.com.np/api/get-all-static-page-data"
  );

  return (
    <div className="navigation_box tops">
      <ul>
        <li>
          <MenuItem className="home-text" url="/" title="Home" label="Home" />
        </li>
        {isPending && <></>}
        {error && <div>{error}</div>}

        {menu &&
          menu
            .map((c) => (
              <li key={c.id}>
                <a href={`/programSchedule`}>{c.title}</a>
              </li>
            ))
            .slice(0, 1)}
        <li className="dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {menu && menu.map((c) => c.title).slice(1, 2)}
          </a>
          <ul className="dropdown-menu">
            <MenuItem
              url={`/newsList/${menu && menu.id}`}
              title="Background"
              label="Background"
            />
            <MenuItem url={`/newsList/${menu && menu.id}`} title="History" label="History" />
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Another Menu
              </a>

              <ul className="dropdown-menu">
                <MenuItem
                  url={`/newsList/${menu && menu.id}`}
                  title="Background"
                  label="Submenu 01 here"
                />
                <MenuItem
                  url={`/newsList/${menu && menu.id}`}
                  title="History"
                  label="Submenu 02 here"
                />
                <MenuItem
                  url={`/newsList/${menu && menu.id}`}
                  title="Mission"
                  label="Submenu 03 here"
                />

                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Another Menu
                  </a>

                  <ul className="dropdown-menu">
                    <MenuItem
                      url={`/newsList/${menu && menu.id}`}
                      title="Background"
                      label="Submenu 01 here"
                    />
                    <MenuItem
                      url={`/newsList/${menu && menu.id}`}
                      title="History"
                      label="Submenu 02 here"
                    />
                    <MenuItem
                      url={`/newsList/${menu && menu.id}`}
                      title="Mission"
                      label="Submenu 03 here"
                    />
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {menu &&
          menu
            .map((c) => (
              <li key={c.id}>
                <Link href={`/newsList/${c.id}`}>
                  <a>{c.title}</a>
                </Link>
              </li>
            ))
            .slice(2, 3)}
        {menu &&
          menu
            .map((c) => (
              <li key={c.id}>
                <Link href={`/newsList/${c.id}`}>
                  <a>{c.title}</a>
                </Link>
              </li>
            ))
            .slice(3, 4)}
        {menu &&
          menu
            .map((c) => (
              <li key={c.id}>
                <Link href={`/newsList/${c.id}`}>
                  <a>{c.title}</a>
                </Link>
              </li>
            ))
            .slice(4, 5)}
        <li>
          <MenuItem url="/contact" title="Contact" label="Contact" />
        </li>
        {/* <li>
          <Link href={`/programSchedule`}>
            <a title={menu.title}>{menu.title}</a>
          </Link>
        </li>

        <li className="dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {menu.title}
          </a>
          <ul className="dropdown-menu">
            <MenuItem url={`/newsList/${id}`} title="Background" label="Background" />
            <MenuItem url={`/newsList/${id}`} title="History" label="History" />
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Another Menu
              </a>

              <ul className="dropdown-menu">
                <MenuItem
                  url={`/newsList/${id}`}
                  title="Background"
                  label="Submenu 01 here"
                />
                <MenuItem
                  url={`/newsList/${id}`}
                  title="History"
                  label="Submenu 02 here"
                />
                <MenuItem
                  url={`/newsList/${id}`}
                  title="Mission"
                  label="Submenu 03 here"
                />

                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Another Menu
                  </a>

                  <ul className="dropdown-menu">
                    <MenuItem
                      url={`/newsList/${id}`}
                      title="Background"
                      label="Submenu 01 here"
                    />
                    <MenuItem
                      url={`/newsList/${id}`}
                      title="History"
                      label="Submenu 02 here"
                    />
                    <MenuItem
                      url={`/newsList/${id}`}
                      title="Mission"
                      label="Submenu 03 here"
                    />
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <MenuItem
          url="/programSchedule"
          title="Programme Schedule"
          label="programme schedule"
        />
        <MenuItem url={`/newsList/${id}`} title="Podcasts" label="Podcasts" />
        <MenuItem
          url={`/newsList/${id}`}
          title="Advertisements"
          label="Advertisements"
        />

        <li className="dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Our Team
          </a>
          <ul className="dropdown-menu">
            <MenuItem
              url="/radioPresenters"
              title="Radio Presenters"
              label="Radio Presenters"
            />
            <MenuItem
              url={`/newsList/${id}`}
              title="Management Team"
              label="Management Team"
            />
            <MenuItem
              url={`/newsList/${id}`}
              title="Technical Team"
              label="Technical Team"
            />
          </ul>
        </li>
        <MenuItem className="live-btn" url="/live" title="Live" label="Live" /> */}
      </ul>
    </div>
  );
};

export default TopNav;

const MenuItem = ({ url = "/", label = "", title = "" }) => {
  const router = useRouter();
  return (
    <Link href={url}>
      <a title={label}>{label}</a>
    </Link>
  );
};
