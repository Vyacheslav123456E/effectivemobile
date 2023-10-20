import React, {useEffect, useState} from 'react';
import {Drawer, Form, List, Row, Table, Typography} from 'antd';
import Container from "../../components/Container";
import {HistoryOutlined} from "@ant-design/icons/lib";
import {RootState, useStoreDispatch} from "../../redux";
import {HistoryUser, Users} from "../../redux/users";
import {useSelector} from "react-redux";
import {IUsers} from "../../types/users";
import {ColumnsType} from "antd/es/table";
import {usersColumns} from "./columns";
import {IHistory} from "../../types/hisory";
import moment from 'moment'
import {Divider} from "antd/lib";


const History: React.FC = () => {
    const dispatch = useStoreDispatch()
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const dataUsers: IUsers[] = useSelector((state: RootState) => state.users.users);
    const dataHistory: IHistory[] = useSelector((state: RootState) => state.users.history);

    const columns: ColumnsType<IUsers> = usersColumns

    useEffect(() => {
        dispatch(Users())
        columns.push({
                title: '',
                dataIndex: 'operation',
                render: (_: any, record: IUsers) => {
                    return (
                        <Typography.Link onClick={() => historyItem(record)}>
                            <HistoryOutlined />
                        </Typography.Link>
                    );
                },
            },
        )
    }, []);

    const historyItem = (user: IUsers) => {
        dispatch(HistoryUser(user.id))
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    console.log(dataHistory)
    return (
        <Container>
         <Form form={form} component={false}>
            <Table
                bordered
                dataSource={dataUsers}
                columns={columns}
                rowKey={(record) => record.id}
                rowClassName="editable-row"
            />
        </Form>
            <Drawer title="Basic Drawer" placement="left" onClose={onClose} open={open} >
                <List
                    dataSource={dataHistory}
                    renderItem={(item) => (
                        <>
                            <h5 style={{margin: 0}}>{item.users.name}</h5>
                            <p style={{margin: 0}}>{item.event}</p>
                            <p style={{margin: 0}}>{moment(item.created_at).format('DD.MM.YYYY hh.mm')}</p>
                            <Divider/>
                        </>
                    )}
                />
            </Drawer>
        </Container>
    );
};

export default History;