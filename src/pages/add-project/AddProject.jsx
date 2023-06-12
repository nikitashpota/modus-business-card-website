import React from "react";
import Axios from "axios";
import "./AddProject.css";

const FormDataAppendObject = (fd, obj, key) => {
  let i, k;
  for (i in obj) {
    k = key ? key + "[" + i + "]" : i;
    if (typeof obj[i] == "object") FormDataAppendObject(fd, obj[i], k);
    else fd.append(k, obj[i]);
  }
};

const AddProject = () => {
  const [inputs, setInputs] = React.useState({
    name: null,
    description: null,
    authors: null,
    type: "Housing",
  });

  const [image, setImage] = React.useState();
  const [images, setImages] = React.useState();

  const selects = ["Housing", "Public", "City"].map((sel, ind) => {
    return <option key={ind}>{sel}</option>;
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    FormDataAppendObject(formData, inputs);
    formData.append("image", image);

    Object.values(images).forEach((image) => {
      formData.append("uploadImages", image);
    });

    await Axios.post(
      `/api/addProject`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  };

  return (
    <div className="add-project">
      <form className="add-project_form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Имя проекта..."
        />
        <textarea
          onChange={handleChange}
          name="description"
          type="text"
          placeholder="Описание..."
        />
        <p>Тип</p>
        <select onChange={handleChange} name="type">
          {selects}
        </select>
        <p>Изображение</p>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          name="image"
          type="file"
          accept="image/png, image/jpeg"
        />
        <p>Изображения</p>
        <input
          onChange={(e) => setImages(e.target.files)}
          name="images"
          type="file"
          multiple
          accept="image/png, image/jpeg"
        />
        <textarea
          onChange={handleChange}
          name="authors"
          type="text"
          placeholder="Авторская группа..."
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default AddProject;
