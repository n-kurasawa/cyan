import { PARTICIPANT_ALL_ACTION,
         PARTICIPANT_CANCEL_EVENT_ACTION,
         PARTICIPANT_JOIN_EVENT_ACTION,
         PARTICIPANT_CLEAR_ACTION
       } from '../constants/ActionTypes';

export default function participants(state=[], action) {
  switch (action.type) {
    case PARTICIPANT_ALL_ACTION:
      return action.users;

    case PARTICIPANT_CANCEL_EVENT_ACTION:
      let participants = state.filter((participant)=>{
        return participant.id !== action.user.id;
      });
      return participants;

    case PARTICIPANT_JOIN_EVENT_ACTION:
      return [action.user, ...state];

    case PARTICIPANT_CLEAR_ACTION:
      return [];

    default:
      return state;
  }
}
