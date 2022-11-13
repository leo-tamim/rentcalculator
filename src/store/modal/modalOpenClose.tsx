export const SHOW_MODAL = "teamly/settings/SHOW_MODAL";
export const HIDE_MODAL = "teamly/settings/HIDE_MODAL";

export interface CommonState {
  modalOpen: boolean;
  modalType: string;
}

const initialState: CommonState = {
  modalOpen: false,
  modalType: "done",
};

const ModalAction = (state: CommonState = initialState, action: any) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalOpen: true,
      };

    case HIDE_MODAL:
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};

export default ModalAction;

export const showModal = ({ type }: { type: string }) => ({
  type: SHOW_MODAL,
  modalType: type,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
