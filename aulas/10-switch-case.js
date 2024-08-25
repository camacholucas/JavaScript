let permissao; //comum,adm,master

permissao = 'master'

switch(permissao){
    case 'comum':
        console.log('Usuário comum');
        break;

    case 'adm':
        console.log('Usuário adm');
        break;

    case 'master':
        console.log('Usuário master');
        break;

    default:
    console.log('Usuário não reconhecido!')
}