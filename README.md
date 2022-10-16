# DIO DEVOPS

## Passo a passo para utilização

   * Clonar esse repositório dentro de uma pasta chamada **website** na raiz do servidor Linux
   
         git clone https://github.com/Thimisul/DIO-LINUX-PROJECT1-IAC.git website
   * Acessar a pasta website
         
         cd website
   * Executar o bash.sh

         ./bash.ssh
  
### Para que server:

#### Esse repósitorio quando clonado e executado dentro de um servidor linux vai criar com Docker-Compose com alguns servidores:

1. APACHE para o frontend
2. NODE para o backend
3. MYSQL para armazenagem de dados.

Assim criando um aplicativo com Backend, frontend e armazenagem de dados.

O Foco desse projeto é apenas testar as conexões entre os servidores.

Testes realizados em uma instância ec2 com sistema operacional linux Ubuntu da AWS.

Na intância ec2 foi configurado um grupo de segurança onde contem regras de entrada para a porta TCP 8000 e 80.