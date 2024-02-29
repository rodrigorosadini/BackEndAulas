const readline = require('readline-sync')
const contatoControlador = require('./controlador')

function menu(){
    console.log("1 - Adicionar Contato\n2 - Listar Contato\n3 - Buscar Contato\n4 - Atualizar contato\n5 - Remover contato\n6 - Sair")
}

function escolherOpcao(opcao){
    switch(opcao){
        case '1':
            const nome1 = readline.question("Digite o nome: ");
            const email1 = readline.question("Digite o email: ");
            const telefone1 = readline.question("Digite o telefone: ");
            contatoControlador.adicionarContato(nome1, email1, telefone1);
            const mensagem1 = readline.question("Aperte ENTER para continuar: ");
            break
        case '2':
            console.log( contatoControlador.listarContatos())
            const mensagem2 = readline.question("Aperte ENTER para continuar: ");
            break;
        case '3':
            const busca = readline.question('Digite o nome do contato: ')
            const buscador = contatoControlador.buscarContato(busca)
            if(buscador){
                console.log(buscador)
            }
            else{
                console.log("Contato não encontrado")
            }
            const mensagem3 = readline.question("Aperte ENTER para continuar: ");
            break
        case '4':
            const nome4 = readline.question("Digite o nome: ");
            const email4 = readline.question("Digite o email: ");
            const telefone4 = readline.question("Digite o telefone: ");
            contatoControlador.atualizarContato(nome4, email4, telefone4)
            const mensagem4 = readline.question("Aperte ENTER para continuar: ");
            break
        case '5':
            const nome5 = readline.question("Digite o nome: ");
            contatoControlador.removerContato(nome5)
            const mensagem5 = readline.question("Aperte ENTER para continuar: ");
            break;
        case '6':
            process.exit()
    }
}

function main(){
    while(true){
        menu()
        const opcao = readline.question('Escolha uma opcao: ')
        escolherOpcao(opcao)
    }
}

main()