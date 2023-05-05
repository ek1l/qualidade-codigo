/**
 *
 * Aqui temos um clássico if else onde ficamos testando
 * o mesmo valor (variável people) e, de acordo com esse teste,
 * um valor é atribuído à variável price.
 * Ou seja, de acordo com o teste (condição em si), um valor
 * é atribuído a variável price
 * 
 * Esse tipo de condicional pode ficar gigante de forma muito fácil
 * 
 * A ideia é refatorar e deixar simples essas verificações
 * utilizando funções reutilizáveis
 * 
 * TODO: Eliminar condicionais
 * ? Esse script possui testes
 */


export default function getDiscount(people) {
  const tests = [
    [value =>  value < 10, 500],
    [value => value >= 10 && value <25, 350],
    [value => value >= 25 && value < 100, 250],
    [value => value >= 100, 200],
  ]
 const [ _,discount ] =  tests.find(function([ test ]) {
    return  test(people)
  })

  return discount
}