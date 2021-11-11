import { useRouter } from "next/router";
import DashBoardItems from "../../components/shared/DashBoardItems";
import Footer from "../../components/shared/Footer";
import LogoImg from "../../components/shared/LogoImg";
import NavBar from "../../components/shared/NavBar";

const Dashboard = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <NavBar />
      <LogoImg />
      <DashBoardItems />
      <Footer />
    </div>
  );
};

export default Dashboard;
