import React, { useEffect } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'
import { Provider } from 'mobx-react'
import { mallStore } from './store/mall'
// 全局样式
import './app.scss'

function App({ children }) {
  // 可以使用所有的 React Hooks
  useEffect(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})
  return (
    <Provider mallStore={mallStore}>
      {children}
    </Provider>
  )
}

export default App
