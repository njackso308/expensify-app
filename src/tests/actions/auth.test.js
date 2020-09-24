import { login, logout } from '../../actions/auth'

test('should genereate login action object', () => {
  const uid = 1
  const action = login(uid)
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('should genereate logout action object', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})