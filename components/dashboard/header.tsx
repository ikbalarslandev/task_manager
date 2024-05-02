import { Button } from "../ui/button";

import { LogoutButton } from "@/components/auth/logout-button";

const HeaderComponent = () => {
  return (
    <div className="bg-gray-500 flex justify-between items-center px-5">
      <h1>Logo</h1>
      <LogoutButton>
        <Button variant="link">Logout</Button>
      </LogoutButton>
    </div>
  );
};

export default HeaderComponent;
