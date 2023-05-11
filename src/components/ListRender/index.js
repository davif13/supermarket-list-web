import { ListCard } from "../ListCard";

export const ListRender = ({ list }) => {
  if (list?.length === 0 ) {
   return <h3>Sua lista está vazia, crie um novo item clicando em "Adicionar"</h3>;
  }
  return (
    <div>
      {
        list.map((item) => (<ListCard key={item?._id} item={item} />))
      }
    </div>
    
  )
}