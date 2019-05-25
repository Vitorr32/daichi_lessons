import { OPEN_DAICHI_MODAL, CLOSED_DAICHI_MODAL, CLOSING_DAICHI_MODAL } from "./action_types";

export const openDaichiModal = (chapter, bounds) => ({
    type: OPEN_DAICHI_MODAL,
    payload: { chapter, bounds }
});

export const closingDaichiModal = {
    type: CLOSING_DAICHI_MODAL
};

export const closedDaichiModal = {
    type: CLOSED_DAICHI_MODAL
};
