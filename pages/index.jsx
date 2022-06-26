import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
import lista_de_contatos from '../database/data/lista_de_contatos';


export default function Home() {
  //const [contatos, setContatos] = useState([])



  const contatos = ['jeferson', 'jana', 'gabriel', 'luis'];





  function listagem() {
    console.log(lista_de_contatos);
    return lista_de_contatos.map((contato) => <li key={contato.id}>{contato.nome}</li>)
  }





  return (
    <section className={styles.corpo}>
      <div className={styles.left}>
        <div className={styles.topLeft}>
          <div className="font-light text-lg">
            Biblioteca
          </div>
        </div>
        <div className={styles.bottomLeft}>
          <ul>
            <li>Nomes</li>
            {listagem()}
          </ul>
        </div>
      </div>
      <div className={styles.rigth}>
        <div className={styles.topRigth}>
          top rigth
        </div>

        <div className={styles.bottomRigth}>
          bottom rigth
        </div>

      </div>
    </section>

  )
}
