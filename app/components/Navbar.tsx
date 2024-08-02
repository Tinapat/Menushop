import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Input, Layout, Typography } from "antd";
import React, { ChangeEvent } from "react";

type Props = {
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Navbar({ onchange }: Props) {
  const { Header } = Layout;
  const { Title } = Typography;
  return (
    <Header className=" flex items-center justify-between">
      <Title style={{ margin: 0, color: "#ffffff" }}>
        <ShoppingCartOutlined /> Shoping
      </Title>
      <Input
        className=" w-64"
        suffix={<SearchOutlined />}
        onChange={onchange}
      />
    </Header>
  );
}
