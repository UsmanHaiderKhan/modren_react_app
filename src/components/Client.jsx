import React from 'react'
import {clients} from '../constants'
import styles from '../style'

const Client = () => (
    <section className={`${styles.flexCenter} my-6`}>
      <div className={`${styles.flexCenter} w-full flex-wrap`}>

        {clients.map((client)=>{
          return(
          <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} className='sm:w-[192px] w-[100px] object-contain' alt="" />
          </div>);
        })}
      </div>
    </section>
  )


export default Client