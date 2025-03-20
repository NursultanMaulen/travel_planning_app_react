import axios from "axios";

const useCreate = (endpoint) => {
  const createItem = async (item) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/${endpoint}`,
        item
      );
      return response.data;
    } catch (error) {
      console.error("Ошибка при добавлении данных:", error);
      throw error;
    }
  };

  return { createItem };
};

export default useCreate;
