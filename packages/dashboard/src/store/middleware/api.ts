import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default history => ({ dispatch, getState }) => {
  const httpLink = createHttpLink({
    uri: getState().config.apiUrl,
    credentials: 'include',
  })
  const uploadLink = createUploadLink({
    uri: getState().config.apiUrl,
    credentials: 'include',
  })

  // const middlewareLink = setContext(() => {
  //   if (getState().security.token) {
  //     return {
  //       headers: {
  //         authorization: getState().security.token || null,
  //       },
  //     }
  //   }

  //   return {
  //     headers: {},
  //   }
  // })

  // const link = ApolloLink.from([httpLink])

  const client = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: ApolloLink.from([uploadLink, httpLink]),
  })

  return next => action => {
    if (typeof action === 'function') {
      action(dispatch, getState, client, history)
    } else {
      next(action)
    }
  }
}
