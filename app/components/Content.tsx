import { DownOutlined } from "@ant-design/icons";
import {
  Dropdown,
  Layout,
  MenuProps,
  Space,
  Button,
  Typography,
  Card,
  Menu,
} from "antd";
import React, { useEffect, useState } from "react";

type Props = {
  store: Product[];
};

export default function Content({ store }: Props) {
  const { Content } = Layout;
  const { Text } = Typography;
  const [sortedStore, setSortedStore] = useState<Product[]>(store);

  useEffect(() => {
    setSortedStore(store);
  }, [store]);

  const handleMenuClick = (e: any) => {
    const sortOption = e.key;
    let sortedData = [...store];
    sortOption === "name-asc"
      ? sortedData.sort((a, b) => a.title.localeCompare(b.title))
      : sortOption === "name-desc"
      ? sortedData.sort((a, b) => b.title.localeCompare(a.title))
      : sortOption === "price-asc"
      ? sortedData.sort((a, b) => a.price - b.price)
      : sortOption === "price-desc"
      ? sortedData.sort((a, b) => b.price - a.price)
      : sortOption;
    setSortedStore(sortedData);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="name-asc">Name A-Z</Menu.Item>
      <Menu.Item key="name-desc">Name Z-A</Menu.Item>
      <Menu.Item key="price-asc">Price Low to High</Menu.Item>
      <Menu.Item key="price-desc">Price High to Low</Menu.Item>
    </Menu>
  );

  return (
    <Content className=" w-full flex items-center flex-col py-8">
      <div className=" w-3/4 mb-8">
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button
            type="primary"
            style={{ background: "#001529" }}
            onClick={(e) => e.preventDefault()}
          >
            <Space>
              Sort By
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className=" grid grid-cols-4 w-2/3 gap-4">
        {sortedStore.map((item) => (
          <Card key={item.id} hoverable>
            <div className=" flex justify-center">
              <img
                src={item.images[0]}
                alt={item.images[0]}
                className=" h-52"
              />
            </div>
            <div className=" flex flex-col">
              <Text style={{ fontSize: "14px", marginBottom: "1rem" }}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "end",
                  color: "#001529",
                }}
              >
                {item.price} $
              </Text>
            </div>
          </Card>
        ))}
      </div>
    </Content>
  );
}
