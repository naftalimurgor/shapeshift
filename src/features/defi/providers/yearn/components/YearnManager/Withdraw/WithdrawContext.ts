import { createContext } from 'react'

import { YearnWithdrawActions, YearnWithdrawState } from './WithdrawCommon'

interface IWithdrawContext {
  state: YearnWithdrawState | null
  dispatch: React.Dispatch<YearnWithdrawActions> | null
}

export const WithdrawContext = createContext<IWithdrawContext>({ state: null, dispatch: null })
