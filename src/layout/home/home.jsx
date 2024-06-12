import { HomeContainer } from "../../containers";

function HomeLayout(props) {
  return (
    <div className="home-layout">
      <HomeContainer {...props} />
    </div>
  );
}

export default HomeLayout;
