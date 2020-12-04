import React from "react";
import { Modal, Button } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";

const CreateEditModal = (props) => {
  const { list, items } = props;
  const [sModalVisible, setisModalVisible] = React.useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: { id: null, location: null, description: null },
  });

  const showModal = () => {
    setisModalVisible(true);
  };

  const onSubmit = (data) => {
    const push = [...items, data];

    props.setSample(true);
    props.setItems(push);
    setisModalVisible(false);
  };

  const IDindex = list ? list.length - 1 : null;
  const IDitem = list ? list[IDindex] : null;
  const IDincrement = IDitem ? JSON.parse(IDitem.id) + 1 : 0;

  return (
    <>
      <Button
        onClick={showModal}
        type="primary"
        icon={<PlusSquareOutlined />}
        className="button-add"
      >
        Add
      </Button>
      <Modal title="Create New Location" visible={sModalVisible} footer={false}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="id"
            value={IDincrement}
            ref={register}
            hidden
          />
          <label>Location:</label>
          <input
            type="text"
            name="location"
            ref={register}
            style={{ width: "100%", border: "1px solid black" }}
          />

          <label>Description:</label>
          <textarea
            col="5"
            type="text"
            name="description"
            ref={register}
            style={{ width: "100%" }}
          />

          <input
            type="submit"
            style={{
              width: "100%",
              background: "blue",
              color: "white",
              marginBottom: 5,
            }}
          />
          <button
            type="button"
            onClick={() => setisModalVisible(false)}
            style={{ width: "100%" }}
          >
            Cancel
          </button>
        </form>
      </Modal>
    </>
  );
};

export default CreateEditModal;
