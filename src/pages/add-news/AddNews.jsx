import React from "react";
import Axios from "axios";
import "./AddNews.css";

const FormDataAppendObject = (fd, obj, key) => {
  let i, k;
  for (i in obj) {
    k = key ? key + "[" + i + "]" : i;
    if (typeof obj[i] == "object") FormDataAppendObject(fd, obj[i], k);
    else fd.append(k, obj[i]);
  }
};

const AddNews = () => {
  const [inputs, setInputs] = React.useState({
    name: null,
    description: null,
  });

  const [image, setImage] = React.useState();

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

    await Axios.post(
      `/api/addNews`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    ).catch((err) => {
      console.error(err);
    });
  };

  return (
    <div className="add-project">
      <form className="add-project_form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Новость..."
        />
        <textarea
          onChange={handleChange}
          name="description"
          type="text"
          placeholder="Описание..."
        />
        <p>Изображение</p>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          name="image"
          type="file"
          accept="image/png, image/jpeg"
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default AddNews;
