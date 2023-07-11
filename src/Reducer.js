import { FAIL_REQUEST, GET_TENANT_LIST, MAKE_REQUEST } from "./ActionType";

const initiatstate = {
  loading: true,
  tenantList: [],
  tenantObj: {},
  errmessage: "",
};

export const Reducer = (state = initiatstate, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errmessage: action.payload,
      };
    case GET_TENANT_LIST:
      return {
        loading: false,
        errmessage: '',
        tenantList: action.payload,
        tenantObj: {}
      };
    default:
      return state;
  }
};
