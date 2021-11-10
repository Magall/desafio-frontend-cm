# Introdução
Construí uma aplicação Vue.js para a resolução do desafio proposto, tomei algumas decisões e escolhi alguns padrões de projeto para que a mesma seja de fácil manutenção e escalabilidade, mesmo que para uma aplicação pequena como essa pareça overkill.

# Como rodar o projeto?

Este projeto foi construído no SO windows 10.
Basta clonar e rodar npm run serve no front e npm run dev para o backend

## Arquitetura
Construí algumas 'camadas' para retirar lógica e regras de negócios da camada de visualização, melhorar a organização e escrever código testavel. As camadas são: services, repository e extensions. Utilizei o padrão de projeto singleton para construir um alerta, que notifica o usuário sempre que necessário. Utilizei arquivos .env

[esquema arquitetura](https://drive.google.com/file/d/1CJ3dWG1Ewj2vyFvHwulkfK_2qYFkUStq/view?usp=sharing)

Conforme pode ser visto no esquema, com execeção da camada de Extensions que pode ser chamada em qualquer lugar, as camadas veem apenas sua vizinha á direita. O objetivo desta decisão foi isolar responsabilidades facilitando a manutenção e escalabilidade. Caso uma regra mude, apenas o service será alterado. Caso a url de um endpoint mude apenas o repository será alterado. Caso o design mude apenas a view será alterada.
### Repository
Esta camada é responsável por encapsular toda a lógica de acesso a apis, desta forma se um endpoint mudar apenas ela sofrerá alterações. Outra vantagem é a reutilização da chamada á um endpoint em diferentes serviços.

[estrutura repository](https://drive.google.com/file/d/1qil43L8IUnlLlvaboF9zq6geXpafDbwH/view?usp=sharing)

Pode-se notar vendo pela imagem que existem duas pastas dentro de repository: config e domain.

Na pasta config crio uma instância axios no arquivo http.js (aqui eu colocaria interceptors para autenticação caso necessário)e crio um client, que é reponsável por encapsular as chamadas rest do front (GET,POST,PUT,DELETE).

A pasta domain é onde crio as chamadas ás apis utilizando o client, o objetivo aqui é ter a chamada as urls em um local só a fim de centralizar o acesso aos endpoints.

### Services
Esta camada é responsável por prover aos componentes as informações e comportamentos que precisem, como por exemplo, chamar um repository para gravar um dado na API e notificar o usuário mostrantdo alerta. Para conseguir chamar estas funções facilmente em qualquer local da instância vue,  instalei como plugin no main.js.

### Extensions
Esta camada possui funções genéricas que são utilizadas em outras camadas.

## Notificador
Para não precisar de instanciar um componente de alerta em cada tela da aplicação fiz isso no App.vue. Todas as suas props são propriedades do Vuex state, que por definição é visível a qualquer instância Vue da aplicação. Foi criado uma função notificar nas extensions para facilitar a chamada as mutations que alteram a mensagem e status do alerta. Desta forma posso notificar em qualquer camada da app um erro ou menssagem de sucesso de maneira centralizada. 

## Validação
Utilizei a biblioteca Vuelidate para fazer a validação.


