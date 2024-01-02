import { Layout } from "antd";
import Sidemenu from "./components/Sidemenu";
import Routers from "./routers/Routers";
const { Header, Content, Footer, Sider } = Layout;
function App() {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Routers />
    </Layout>
  );
}

export default App;
