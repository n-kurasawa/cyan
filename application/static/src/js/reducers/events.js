import { EVENT_ALL_ACTION,
         CREATE_EVENT_ACTION,
         JOIN_EVENT_ACTION
       } from '../constants/ActionTypes';

export default function events(state=[], action) {
  switch (action.type) {
    case EVENT_ALL_ACTION:
      return action.events;

    case CREATE_EVENT_ACTION:
      return [action.event, ...state];

    case JOIN_EVENT_ACTION:
      let join = action.join;
      state.forEach((event)=>{
        if (event.id === join.id) {
          if (event.participant) {
            event.participant.push(join.joinUser);
          } else {
            event.participant = [join.joinUser];
          }
        }
      });
      return state;

    default:
      return state;
  }
}
