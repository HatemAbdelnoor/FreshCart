import React from "react";
import styles from "./NotFound.module.css";
import { ReactComponent as Error } from "../../error.svg"

export default function NotFound(){
    return(
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <Error/>
      </div>
    )
}