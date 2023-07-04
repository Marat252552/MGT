import styles from './styles.module.css'
import React from 'react'
import { Provider } from 'react-redux'
import { setupStore } from '../state/store'
import MainPage from '../pages/MainPage'

let store = setupStore()

class App extends React.Component {

  render() {
    return <Provider store={store}>
      <div className={styles.container}>
        <MainPage />
      </div>
    </Provider>
  }
}

export default App