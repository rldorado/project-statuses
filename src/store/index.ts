import { createStore } from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default createStore({
  state: {
    projects: [],
    tasks: [],
    statuses: [],
  },
  mutations,
  actions,
  getters,
});
