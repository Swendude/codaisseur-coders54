const initialState = {
    me: null,
    accesToken: null
}

// tokenRecieved & meRecieved

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "AUTH/tokenReceived": {
        return {...state, accesToken: action.payload}
      }
      case "AUTH/meReceived": {
        return {...state, me: action.payload}
      }
      default: {
        return state;
      }
    }
  }