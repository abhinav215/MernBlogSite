import React from 'react'
import { useContext } from "react";
import { Context } from "../../context/Context";

const Error = () => {
  const {user} = useContext(Context)
  console.log(user)
  return (
    <div>
      <h1>error</h1>
    </div>
  )
}

export default Error