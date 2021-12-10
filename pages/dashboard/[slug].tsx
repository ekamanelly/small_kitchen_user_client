import { useRouter } from "next/router";
import DashBoardItems from "../../components/DashBoardItems";
import Footer from "../../components/Footer";
import LogoImgHeader from "../../components/LogoImgHeader";
import NavBar from "../../components/NavBar";
import useAuth from "../../hooks/auth.hook";

const Dashboard = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { user } = useAuth();

  return (
    <div>
      <NavBar />
      <LogoImgHeader />
      <DashBoardItems user={user} />
      <Footer />
    </div>
  );
};

export default Dashboard;
