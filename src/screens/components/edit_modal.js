import React from "react";
import { Modal, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";

const CreateEditModal = (props) => {
  const { id, item, items } = props;
  const [sModalVisible, setisModalVisible] = React.useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: id,
      location: item.location,
      description: item.description,
    },
  });

  const showModal = () => {
    setisModalVisible(true);
  };

  const onSubmit = (data) => {
    const findIndex = items.indexOf(item);
    items[findIndex] = data;
    const arr = [...items];

    props.setItems(arr);
    setisModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal} type="default" icon={<EditOutlined />} />
      <Modal title="Edit Location" visible={sModalVisible} footer={false}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" name="id" ref={register} hidden />
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
            value="Save"
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
