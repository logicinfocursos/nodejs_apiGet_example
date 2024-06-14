# acessar apis (endpoints) com node js
[nodejs_apiGet_example](https://github.com/logicinfocursos/nodejs_apiGet_example.git)
[github](https://github.com/logicinfocursos?tab=repositories)

Esse projeto visa mostrar como usar fetch e o axios para acessar dados de uma api em um projeto node js.

Lembrando que o fetch é uma funcionalidade nativa do javascript, enquanto o axios é um plugin externo.

Espero que esse código possa ser usado para você como uma espécie de template ou skeleton "coringa" como um ponto de partida para os seus próximos projetos.

### criar o projeto node js
1- inicializar o projeto:

<pre>
c:\> mkdir apiacess
c:\> cd apiacess
c:\apiacess> npm init -y
</pre>

Isso criará um arquivo package.json na raiz do seu projeto.

### instalar as dependências iniciais do projeto
<pre>
c:\apiacess> npm i express dotenv axios
c:\apiacess> npm i --save-dev nodemon
</pre>

onde:
- [express](https://expressjs.com/): responsável pela por enviar e receber requisições http e orquestra as rotas do projeto

- [axios](https://axios-http.com/): plugin para acesso a endpoints (até onde eu sei, o axios é o plugin mais usado em projetos node js, principalmente em projetos react js)

- [dotenv](https://www.npmjs.com/package/dotenv): irá permitir ler os dados das variáveis de ambiente armazenadas no arquivo ".env"

- [nodemon](https://nodemon.io/): recurso muito útil durante a faze de programação, com ele toda a vez que alterações de código forem salvas, o servidor local será restartado para refletir tais as atualizações

obs.: o uso do parametro --save-dev no npm fará que as dependências assim identificadas sejam configuradas como depências de desenvolvimento, sendo descartadas para o uso em produção

### npm x yarn
nesse tutorial iremos usar o gerenciador de pacotes do próprio nodejs, o npm (e o npx), mas se preferir usar o yarn, fica a seu critério.

como ajustar a sintaxe?
<pre>
npm init -y               | yarn init -y        (inicializar um projeto nodejs)
npm i express             | yarn add express    (instalar uma dependência)
npm i --save-dev nodemon  | yarn add -D nodemon (instalar uma dependência como dev)
npm run dev               | yarn dev            (executar o script)
npm i                     | yarn                (criar o node_modules)
</pre>
para instalar o yarn:
<pre>
npm i -g yarn
</pre>
obs sobre variações no uso do npm:
- em nosso projeto iremos usar o express que é o framework (ou mini-framework) mais usado em projetos node js
- no lugar de "npm install --save-dev", você pode usar "npm install -D" e no lugar de "install" você pode usar some "i"

### antes de "rodar" o projeto
teremos que fazer um ajuste no arquivo "package.json", vamos inserir a seguinte instrução:

<pre>
  "type": "module",
  "scripts": {
    "start": "node --no-warnings ./src/index.js",
    "dev": "nodemon --no-warnings ./src/index.js "
  }
</pre>

onde:
- "type": "module" indicará ao nodejs que será usada a sintaxe mais atual do javascript, permitindo o uso de "import/export"

- "scripts": o projeto terá duas formas de execução: "start" - execução padrão e "dev" - através do nodemon


### nosso primeiro hello world
Pronto, agora podemos executar o nosso projeto pela primeira vez:

<pre>
c:\apiacess> npm run dev
</pre>

no terminal teremos um resultado semelhante a esse:
<pre>
> api@1.0.0 dev
> nodemon --no-warnings ./src/index.js

[nodemon] 3.1.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node --no-warnings ./src/index.js`

</pre>

se tudo der certo e a consulta ao endpoint usado trouxer algum resultado, o mesmo será exibido no terminal

# baixar o projeto no github

[nodejs_apiGet_example](https://github.com/logicinfocursos/nodejs_apiGet_example.git).

se você optar por clonar o projeto ou baixar o arquivo .zip, não se esqueça de gerar a pasta node_modules para obter os plugins usados no projeto, para tanto digitar no terminal:
<pre>
c:\apiacess> npm i
</pre>


# referências
- [node](https://nodejs.org/en)
- [axios](https://axios-http.com/)
- [express](https://expressjs.com/en/starter/hello-world.html)
- [typescript](https://www.typescriptlang.org/docs/)
- [prisma](https://www.prisma.io/docs/getting-started)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [vscode](https://code.visualstudio.com/download)
- [postman](https://www.postman.com/downloads/)
- [insomnia](https://insomnia.rest/download)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

### plugins vscode
- [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [prettier - code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [thunder client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

# sobre a logicinfo

Somos uma consultoria em T.I. e atuamos com desenvolvimento de aplicações para todos os segumentos e mantemos também uma estrutura de treinamento com as melhores soluções para o aprendizado em programação.

Alguns de nossos serviços:

- desenvolvimento de aplicações mobile, web e desktop
- I.A. Generativa - tenha um I.A. focada em seu negócio, atendendo os seus clientes e fornecedores por whatsapp, chat e U.R.A.

Visite o nosso site:
[logicinfo.com.br](https://logicinfo.com.br)

Fale consoco:
whatsapp: [11 9 8627 4173](11-9-8627-4173)
e-mail: [contato@logicinfo.com.br](contato@logicinfo.com.br)
