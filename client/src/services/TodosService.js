import Api from "@/services/Api";

export default {
  async post(load) {
    const { data } = await Api().post("todos", load);
    return data;
  },
  async index(userId) {
    const { data } = await Api().get(`todos/${userId}`);
    return data;
  },
  async edit(updatedTask) {
    const { data } = await Api().put(`todos/${updatedTask.id}`, updatedTask);
    return data;
  },
  async remove(id) {
    const { data } = await Api().delete(`todos/${id}`);
    return data;
  }
};
