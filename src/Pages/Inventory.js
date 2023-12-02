import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "./../API";


function Inventory() {

    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setLoading(true);
        getInventory().then((res) => {
            setDataSource(res.products);
            setLoading(false);
        });
    }, []);

    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Inventory</Typography.Title>

            <Table
                loading={loading}
                columns={[
                    {
                        title: "Thumbnail",
                        dataIndex: "thumbnail",
                        render: (link) => {
                            return <Avatar src={link}></Avatar>
                        }
                    },
                    {
                        title: "Title",
                        dataIndex: "title",
                    },
                    {
                        title: "Price",
                        dataIndex: "price",
                        render: (val) => <span>Rs.{val * 1000}</span>
                    },

                    {
                        title: "Rating",
                        dataIndex: "rating",
                        render: (rat) => {
                            return <Rate value={rat} allowHalf />
                        }
                    },
                    {
                        title: "Stock",
                        dataIndex: "stock",
                    },

                    {
                        title: "Brand",
                        dataIndex: "brand",
                    },
                    {
                        title: "Category",
                        dataIndex: "category",
                    },
                ]}

                dataSource={dataSource}
                pagination={{
                    pageSize: 6,
                }}
            >
            </Table>
        </Space>
    )
}

export default Inventory
