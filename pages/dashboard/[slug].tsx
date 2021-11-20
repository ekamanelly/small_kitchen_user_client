import { useRouter } from "next/router";
import DashBoardItems from "../../components/DashBoardItems";
import Footer from "../../components/Footer";
import LogoImgHeader from "../../components/LogoImgHeader";
import NavBar from "../../components/NavBar";

const Dashboard = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <NavBar />
      <LogoImgHeader />
      <DashBoardItems />
      <Footer />
    </div>
  );
};

export default Dashboard;
