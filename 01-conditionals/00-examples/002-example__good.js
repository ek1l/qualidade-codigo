/**
 * Condicional com duas expressões onde podemos decompor e encapsular
 * dentro de uma function, ficando mais legível e reaproveitável
 *
 * TODO: Decompor condicional para uma function separada
 */

const verificarFetching = (fsm, listNode) => {
  return fsm.state === "fetching" && isEmpty(listNode) 
}


if(verificarFetching(fsm, [])) {
  
} 





