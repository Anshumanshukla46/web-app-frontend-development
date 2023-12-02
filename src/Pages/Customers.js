import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers } from "./../API";


function Customers() {

    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setLoading(true);
        getCustomers().then((res) => {
            setDataSource(res.users);
            setLoading(false);
        });
    }, []);

    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Customer Details</Typography.Title>

            <Table
                loading={loading}
                columns={[
                    {
                        title: "Photo",
                        dataIndex: "image",
                        render: (link) => {
                            return <Avatar src={link}></Avatar>
                        }
                    },
                    {
                        title: "First Name",
                        dataIndex: "firstName",
                    },
                    {
                        title: "Last Name",
                        dataIndex: "lastName"
                    },
                    {
                        title: "Username",
                        dataIndex: "username",
                    },
                    {
                        title: "Email",
                        dataIndex: "email"
                    },
                    {
                        title: "Phone",
                        dataIndex: "phone",
                    },

                    {
                        title: "Address",
                        dataIndex: "address",
                        render: (add) => {
                            return <span>{add.address}, {add.city}</span>
                        }
                    },
                    {
                        title: "University",
                        dataIndex: "university"
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

export default Customers
