import React from "react";
import { Table, Button } from "antd";
import { connect } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import CreateEditModal from "./components/create_modal";
import EditModal from "./components/edit_modal";
import "./css/style.css";

const Landing = (props) => {
  const [list, setFunctionList] = React.useState({
    data: [],
  });
  const [sample, setSample] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setStateList();
  }, [props.list]);

  const setStateList = () => {
    setFunctionList({ data: props.list });
    setItems(props.list);
  };

  console.log(items);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "Location",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "Description",
    },
    {
      title: "",
      key: "actions",
      width: 150,
      render: (x, y, z) => {
        return (
          <div>
            <EditModal
              item={x}
              id={x.id}
              setSample={setSample}
              setItems={setItems}
              items={items}
            />
            <Button
              icon={<DeleteOutlined />}
              type="danger"
              className="buttons-table"
              onClick={() => {
                const data = [...items];

                const findIndex = data.indexOf(x);
                data.splice(findIndex, 1);

                setItems(data);
              }}
            />
          </div>
        );
      },
    },
  ];

  console.log("remove", items);
  return (
    <div style={{ padding: 50 }}>
      <CreateEditModal
        list={list.data}
        setFunctionList={setFunctionList}
        setSample={setSample}
        setItems={setItems}
        items={items}
      />
      <Table columns={columns} dataSource={items} />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    list: state.locations.list,
  };
};

export default connect(mapStateToProps, null)(Landing);
