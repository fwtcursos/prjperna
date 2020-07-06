// CONDICOES MULTIPLAS

/* switch (expressao) {
    caso 1:
    break OBRIGATORIO
    caso 2:
    break OBRIGATORIO
    case 3:
    break OBRIGATORIO
    default: 
    break OBRIGATORIO
} */

var now = new Date()
var daytime = now.getDay()
//console.log(daytime)

switch(daytime) {
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    default:
        console.log(`[ERRO] Invalid day!`)
        break    
    
        
}
