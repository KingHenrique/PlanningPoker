export const Types = {
  GET_CARDS: 'cards/GET_CARDS',
  CARD_SELECTION: 'cards/CARD_SELECTION'
}

export const Creators = {
  getAllCards: () => {
    return {
      type: Types.GET_CARDS
    }
  },
  cardSelection: index => {
    return {
      type: Types.CARD_SELECTION,
      payload: index
    }
  }
}

const INITIAL_STATE = {
  cards: ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?'],
  selectedCard: ''
}

export default function cards(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_CARDS:
      return { ...state }
    case Types.CARD_SELECTION:
      let selectedCard = state.cards[action.payload]
      console.log({ selectedCard })

      return { ...state, selectedCard }
    default:
      return state
      break
  }
}
