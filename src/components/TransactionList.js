import React, {useContext} from 'react'
import {GlobalContext} from './../context/GlobalState'
import Transation from './Transation'

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length > 0 ? (
          <>
            {transactions.map((transaction) => (
              <Transation key={transaction.id} transaction={transaction} />
            ))}
          </>
        ) : (
          <h4 style={{textAlign: 'center'}}>There is no transactions, yet</h4>
        )}
      </ul>
    </>
  )
}

export default TransactionList
