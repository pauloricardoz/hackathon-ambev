
# Time 19 - Prost!

Projeto criado para ajudar produtores de eventos a conquistar melhores condições de preço, logística e relacionamento com a AMBEV

## Instalando:

1. Clone o repositório
2. Entre na pasta do repositorio
 * `cd  hackathon-ambev`
3. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` 

## Sobre o projeto

Projeto desenvolvido durante a participação do "Hackathon Cervejaria do Futuro" realizado pela AMBEV em parceria com a Shawee. 

O desafio escolhido pelo grupo foi "O produto perfeito" na categoria de inovação. A aplicação desenvolvida visa criar um canal dedicado a produtores de eventos ou grandes consumidores que até o momento dependem de uma série de intermediários. 

O frontend foi desenvolvido em ReactJs. Os dados utilizador são fictícios e foram "mockados" simulando uma interação com uma API.

O layout é todo responsivo, gerando uma boa experiência para os usuários.

## Fluxo de navegação

Ao entrar na home-page, deve-se clicar no botão "Começar", que irá redirecionar para a página de agendamento. 

Nessa, deve-se preencher o CEP do local de entrega. Após isso, uma agenda será carregada para a seleção da data de entrega. Note que, ao escolher a data uma busca será feita para verificar se há outras entregas para a mesma cidade, o que levará a uma redução ("rateamento") do frete. No final dessa página deve-se clicar no botão para prosseguir para a área seleção de produtos.

Aqui, tem-se acesso ao produtos disponíveis e seus preços, onde pode-se selecionar a quantidade desejada de cada um deles. Ao finalizar a seleção dos produtos deve clicar no botão "Finalizar compra".

A página de pagamento será carregada, onde deve-se preencher seu dados pessoais, bem como o método de pagamento desejado, para finalizar a compra.

E por fim, uma página de confirmação de pedido será apresentada com o número do pedido e a informação de onde será enviado o comprovante da compra.



## Available Scripts

Criado em React (https://github.com/facebook/create-react-app).


### `Teste implantado com Cypress`
./node_modules/.bin/cypress



### `Pitch`
https://www.youtube.com/watch?v=JdIKXTc4zek&feature=youtu.be

### Demonstração DEMO
https://www.youtube.com/watch?v=md5kOBL-C9Q&feature=youtu.be


## Pendências

### Implementações:
* Gateways de pagamento
* Analise de crédito
* Integração com parceiro logistíco para cálculo de frete
* Processo de rateamento de frete
* Cálculo da porcentagem do utilização do transporte por cliente
* Dashboard de controle de vendas
* Algoritmo de redução de rotas para otimizar o uso do transporte
* Área do usuário 
* Gamificação por meio de indicações cadastradas no aplicativo

## Desenvolvedores

 <a href="https://www.linkedin.com/in/cduessel/" target="_blank" rel="noopener noreferrer">Christian Düssel</a>
<a href="https://www.linkedin.com/in/araujoluiz/"
target="_blank" rel="noopener noreferrer" >  Luiz Araujo</a>
<a href="https://www.linkedin.com/in/matheus-beaumord/" target="_blank" rel="noopener noreferrer"> Matheus Beaumord</a>
<a href="https://www.linkedin.com/in/paulo-ricardo-zambelli-taveira/"
target="_blank" rel="noopener noreferrer">Paulo Ricardo Zambelli</a>        
<a href="https://www.linkedin.com/in/rafaelassad/" target="_blank"
rel="noopener noreferrer" >Rafael Assad</a>

