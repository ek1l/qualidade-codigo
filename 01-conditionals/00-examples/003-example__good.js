/**
 * Condicionais negativas é um mal para a humanidade. Traz
 * complexidade no entendimento da condicional, podendo
 * ocasionar bugs.
 * 
 * TODO: Refatorar para utilizar condicionais positivas
 * ? Esse script possui testes
 * 
 * ! Regras de saída da function:
 * 
 * * all online & all connected  => connected
 * * all online & some connected => partially disconnected
 * * all online & none connected => disconnected
 * * some online => partially offline
 * * none online => offline
 */

function allFalse(arr) {
  return arr.every((valor) => {
    return !valor
  })
}


function allTrue(arr) {
  return arr.every((valor) => {
    return valor
  })
}


export default function getStatus(onlineArr, connectedArr) {
  let status;
  if (allFalse(onlineArr)) {
    status = "Offline";
  } else if (allTrue(onlineArr)) {
    if (allFalse(connectedArr)) {
      status = "Disconnected";
    } else if (allTrue(connectedArr)) {
      status = "Connected";
    } else {
      status = "Partially disconnected";
    }
  } else {
    status = "Partially offline";
  }

  return status;
}