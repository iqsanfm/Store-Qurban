import Navbar from "../../components/Navbar";
import React from 'react';
import styles from "./styles.module.css";

export default function About() {
  return (
   <div className={styles.container}>
    <div className={styles.main_container}>
      <Navbar/>
        <ul>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        </ul>
    </div>
    </div>
  )
}