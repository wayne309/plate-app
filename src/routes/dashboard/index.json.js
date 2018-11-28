import { db } from '../../utils/db'

export async function get(req, res, next) {
  const data = {
    todos: {
      total: db
        .get('todoLists')
        .size()
        .value(),
      todoLists: db
        .get('todoLists')
        .take(5)
        .value()
    },
    reminders: {},
    notes: {},
    events: {}
  }

  if (data !== null) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  } else {
    next()
  }
}
