import React from 'react';
import { Link } from 'react-router-dom';
import { List, Avatar } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

function OrganizationProfiles(props) {
    return (
        <div>
            <h3>Organizations</h3>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
                }}
                dataSource={props.profiles}
                footer={
                <div>
                    <b>ant design</b> footer part
                </div>
                }
                renderItem={item => (
                <List.Item
                    key={item.username}
                    actions={[
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                    <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                    }
                >
                    <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<Link to={`profiles/${item.id}`}>{item.username}</Link>}
                    description={item.description}
                    />
                    {item.username}
                </List.Item>
                )}
            />
        </div>
    )
}

export default OrganizationProfiles;