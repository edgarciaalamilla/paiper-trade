import { ReactComponent as Stack } from "../assets/images/stack_24dp.svg";
import { ReactComponent as Search } from "../assets/images/search_24dp.svg";
import { ReactComponent as Feed } from "../assets/images/feed_24dp.svg";
import { ReactComponent as Account } from "../assets/images/account_24dp.svg";
import { ReactComponent as Settings } from "../assets/images/settings_24dp.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-icons">
        <Stack />
        <Search />
        <Feed />
      </div>
      <div className="sidebar-icons">
        <Account />
        <Settings />
      </div>
    </div>
  );
}

export default Sidebar;
