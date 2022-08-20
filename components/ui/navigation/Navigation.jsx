import LeftNavigation from "./left/LeftNavigation";

const Navigation = () => {
  return (
    <div>
      <div>
        <div className="shadow-lg flex relative">
          <LeftNavigation />
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
