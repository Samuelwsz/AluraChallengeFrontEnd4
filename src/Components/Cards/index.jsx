import Card from "../Card"

import animais from "@/json/animais.json"

export default function Cards() {
  return (
    <>
      {animais.map((animal) => {
        return <Card key={animal.id} {...animal} />
      })}
    </>
  )
}
