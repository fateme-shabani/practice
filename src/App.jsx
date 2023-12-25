import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./components/Product";
import Cost from "./components/Cost";
import Counter from "./components/Counter";
import Form from "./components/Form";
import {v4 as uuidv4} from 'uuid'

function App() {
  const [count, setCount] = useState(0);
  // const products=[
  //   {type:'laptop asus',price:180000},
  //   {type:'laptop lenovo',price:120000},
  //   {type:'laptop hp',price:80000},
  // ]
  const costs = [
    { id: 1, type: "laptop", price: 1800 },
    // { id: 2, type: "mobile", price: 800 },
    // { id: 3, type: "airPods", price: 200 },
  ];

  return (
    <div>
      <Form />
      <Counter />
      {/* {products.map((item,index)=>{
      return <Product key={index} product={item}/>
    })} */}
      {costs.map((item) => {
        return <Cost key={item.id} data={item} />;
      })}
    </div>
  );
}

export default App;
