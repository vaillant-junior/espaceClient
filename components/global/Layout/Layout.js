import Header from "../Header/Header";
import {Layout as AntdLayout} from "antd";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
