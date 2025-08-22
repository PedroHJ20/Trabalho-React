import Image from "next/image"

export function Profile() {
    return (
        <div>
            <Image src="/perfil.jfif"alt="Imagem perfil" width={100} height={100}/ >
            <h4>Pedro Henrique Jerônimo</h4>
            <p>Sou estudante do 3 período de Sistemas para Internet</p>
            <p>Estou em fase de desenvolvimento </p>


        </div>
    )
}