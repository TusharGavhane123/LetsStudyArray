import { getArrayMethodDescription } from '@/helperFunctions';
import { useState } from 'react';
import styles from "./page.module.css";
import ArrayMethodsDetails from '../src/ArrayMethodsDetails';
import { arrayMethods } from "../src/constant"
export default function Home() {
  const [arrayMethodName, setArrayMethodName] = useState<string>('')

  return (
    <div className={styles.main}>
      <div>
        <div>Array Methods and its description with demo examples</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'flex-start', gap: 2 }}>
        {
          arrayMethods.map((value) => {
            return (<>
              <button onClick={() => { setArrayMethodName(value) }} key={value}>{value}</button>
            </>)
          })
        }
      </div>
      <ArrayMethodsDetails methodName={arrayMethodName} />

    </div>

  )
}

