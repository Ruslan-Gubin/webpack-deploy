import  { useState } from 'react';
import styles from  './App.module.scss'; 
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


const test2 = () => {
console.log('Error')
}

const test = () => {
  return test2()
}

const sum = (a: number, b: number) => {
  return a + b
}


const App = () => {
  const [count, setCount] = useState<number>(0);

  const handleClickError = () => {
    return test()
  }
console.log(sum(2,4))
  return (
    <div>
      <Link to={'./shop'} style={{paddingRight: 50}}>Shop</Link>
      <Link to={'./about'}>About</Link>


    {/* <img width={100} height={100} src={imgPng} alt="Png" /> */}
    jpg было 5мб сжало 500кб


    {/* <LogoSvg style={{color: 'green'}} width={200} height={200} fill='red' color='red'   /> */}
    {/* <TestSvg style={{color: 'green'}} width={150} height={50} fill='red' color='red'  /> */}

      <h1>Webpack Template </h1>

      <h2>Variables</h2>
      <label>Url: {BACKEND_URL}</label>

      <button onClick={handleClickError}>Error</button>

      <h2 data-testid={'TEST_ID_APP_H2'} >Count: {count}</h2>
      <button className={styles.button} onClick={() => setCount(prev => prev + 1)}>Up</button>  
      <button className={styles.button} onClick={() => setCount(prev => prev - 1)}>Down</button>        
      <Outlet/>
    </div>
  );
};

export { App };