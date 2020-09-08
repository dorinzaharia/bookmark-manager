// External imports
import React from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Card } from 'antd';
import { CopyOutlined, AppstoreAddOutlined } from '@ant-design/icons';


// CSS
import 'antd/dist/antd.css';

const { Meta } = Card;

const SearchCard = props => {

  const addAction = <AppstoreAddOutlined/>;
  const copyAction = (
    <CopyToClipboard text={props.item.url}>
      <CopyOutlined />
    </CopyToClipboard>
  );

  return (
    <Card
          style={{ marginTop: 16 }}
          onClick={props.click}
          actions={[
            addAction,
            copyAction
          ]}
        >
            <Meta
              title={props.item.name}
              description={props.item.snippet}
            />
        </Card>
  );
}

export default SearchCard;