import type { NextComponentType } from 'next'
import Image from "next/image";
import styles from '../styles/Header.module.css'

const Header: NextComponentType = () => {
  return (
    <div className={styles.container}>
      <Image src="../public/logo.svg" width={100} height={100} alt="logo" />
    </div>
  )
}