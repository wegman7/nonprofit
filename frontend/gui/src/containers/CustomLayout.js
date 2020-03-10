import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import CustomNavbar from '../components/CustomNavbar';

const { Content, Footer } = Layout;

function CustomLayout(props) {
    return (
        <Layout className="layout">
            <CustomNavbar {...props}/>
            <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '100px 0' }}>
            </Breadcrumb>
            <div className="site-layout-content">
                {props.children}
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default CustomLayout;