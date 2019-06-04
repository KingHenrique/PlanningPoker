export const Types = {
  GET_CARDS: "cards/GET_CARDS"
}

export const Creators = {
  getAllCards: () => {
    return {
      type: Types.GET_CARDS
    }
  }
}

const INITIAL_STATE = {
  cards:[
    "0",
    "1/2",
    "1",
    "2",
    "3",
    "5",
    "8",
    "13",
    "20",
    "40",
    "100",
    "?",
  ]
}

export default function cards(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_CARDS:
      return { ...state }
    default:
      return state
      break
  }
}