import { Profile } from "@/components/Profile";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>

      <h1>Site criado para a disciplina Programação Front-End</h1>

      <Profile />


    </div>
  );
}
