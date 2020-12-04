import React from "react";
import { Table, Button } from "antd";
import { connect } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import CreateEditModal from "./components/create_edit_modal";
import "./css/style.css";
import axios from "axios";

// const Landing = (props) => {
//   const [list, setList] = React.useState({
//     data: props.list,
//   });

//   React.useEffect(() => {
//     setList({ data: props.list });
//   }, [props.list]);

//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "id",
//       key: "id",
//     },
//     {
//       title: "Location",
//       dataIndex: "location",
//       key: "Location",
//     },
//     {
//       title: "Description",
//       dataIndex: "description",
//       key: "Description",
//     },
//     {
//       title: "",
//       key: "actions",
//       width: 150,
//       render: (x, y, z) => {
//         return (
//           <div>
//             <Button
//               icon={<EditOutlined />}
//               type="success"
//               className="buttons-table"
//             ></Button>
//             <Button
//               icon={<DeleteOutlined />}
//               type="danger"
//               className="buttons-table"
//               onClick={() => {
//                 const data = list.data;
//                 const findIndex = data.indexOf(x);

//                 data.splice(findIndex, 1);

//                 setList({ data: data });
//               }}
//             ></Button>
//           </div>
//         );
//       },
//     },
//   ];

class Landing extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    axios
      .get("https://5f3430949124200016e18826.mockapi.io/api/locations")
      .then((res) => this.setState({ list: res.data }));
  }
  columns = [
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
            <Button
              icon={<EditOutlined />}
              type="success"
              className="buttons-table"
            ></Button>
            <Button
              icon={<DeleteOutlined />}
              type="danger"
              className="buttons-table"
              onClick={() => {
                const data = this.state.list;
                const findIndex = data.indexOf(x);
                data.splice(findIndex, 1);

                this.setState({ list: data });
              }}
            ></Button>
          </div>
        );
      },
    },
  ];

  setList = () => {};

  render() {
    console.log(this.state.list);

    return (
      <div style={{ padding: 50 }}>
        <CreateEditModal list={this.state.list} setList={this.setList} />
        <Table columns={this.columns} dataSource={this.state.list} />
      </div>
    );
  }
}

const mapStateToProps = ({ locations }) => locations;

export default connect(mapStateToProps, null)(Landing);
