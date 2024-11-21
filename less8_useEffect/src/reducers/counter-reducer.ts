export type CounterType = {
  value: number;
};
export type ActionType = {
  type: string;
  payload: number;
};
export const initialState: CounterType = { value: 0 };

export const counterReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "UP":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "DOWN":
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};
