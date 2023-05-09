<div style="display:flex;justify-content:center"><img src="./g33.png" /></div>
<h1 style="font-size:48px;color:mediumblue">Projeto Full Stack - Motorshop G33</h1>
<p style="font-size:18px;padding:0px 25px 10px">Projeto Full-stack de gestão de anúncios de veículos. Desenvolvimento Front-End em typescript React-TS Vite e Back-End em typescript com Node em Express e TypeORM com banco de dados PostgreSQL, consumo de API <a href="https://kenzie-kars.herokuapp.com/api" taget="_blank"> Kenzie-Kars</a> e hospedagem de upload de imagens pelo Cloudinary. </p>

#

<h2 style="font-size:32px;color:mediumblue">Como instalar o projeto:</h2>

1. Vá ao webiste do <a href="http://nodejs.org" target="_blank">Node.js</a>, faça download da aplicação e instale o servidor para rodar ambos front e back ends.

2. Vá ao webiste do <a href="http://postgresql.org" target="_blank">PostgreSQL</a>, faça download da aplicação e instale o servidor para rodar o banco de dados usado no backend. Anote as informações definidas durante a instalação, como senha e porta de execução do postgre serão necessários na configuração do sistema.

3. Vá ao website do <a href="http://gmail.com" target="_blank">Google GMail</a>, crie uma conta de email para enviar emails de recuperação de senhas para os usuários e use na configuração do <code>.ENV</code>.

4. Vá ao website da <a href="" target="_bloank">Cloudinary</a>, crie uma conta de acesso. Ao completar vá ao Dashboard e copie a API Environment variable para ser usado na configuração do <code>.ENV</code>

5. Com ambos instalados, execute o SQL Shell (psql) para criar o banco de dados: <code>CREATE DATABASE motorshop_g33</code>

6. Renomeie o arquivo <code>.env.example</code> da pasta <b>/backend</b> para <code>.env</code> e edite com as informações definidas por você na configuração do PostgreSQL<pre>
   PGHOST=localhost
   PGPORT=5432
   PGUSER=postgres
   PGPASSWORD=suasenha
   PGDATABASE=motorshop_g33
   SECRET_KEY=TroqueEssaSecrect_key
   SMTP_USER=user@gmail.com
   SMTP_PASS=senhadacontagmail
   CLOUDINARY_URL=cloudinary://11111111111111:XXXx1XxxxX111xxXXX11Xx11xxxxxx@xxxxxxxx

</pre>

7. Após ter a base de dados criada, execute o <b>Node.js command prompter</b>. Vá até as pastas de <b>/frontend</b> e <b>/backend</b> e execute <b>em ambas</b> o comando: <code>npm install</code>

8. Ainda no <b>Node.js command prompter</b>, na pasta <b>/backend</b>, execute o comando para persistirem as migrações da API no banco de dados: <code>npm run typeorm migrations:run -- -d .\src\data-source.ts</code>

9. Por fim, em terminais separados, execute <code>npm start</code> em <b>/backend</b> e <code>npm run dev</code> em <b>/frontend</b><pre>{
   "web_url":"http://localhost:5173",
   "api_url":"http://localhost:3000"
   }</pre>

#

<h2 style="font-size:32px;color:mediumblue">Front-End - Chatinip Web:</h2>

## Página de principal (/):

É a página de entrada no sistema, no cabeçalho se tem acesso a registro ou login de usuários, e caso seja um usuário autenticado, há um menu de opções de usuário, com acesso às opções de anúncios caso seja um usuário vendedor.

Na sessão principal do site, há uma lista de anúncios cadastrados no sistema, com informações, foto e registro visual de boa compra por etiqueta verde.

Na lateral esquerda, ou através de modal, caso seja um acesso mobile, há um filtro de resultados para obter anúncios específicos, além de botões de paginação.

No rodapé da página há informações e um botão para subir a página.

## Página de registro (/register):

Nesta página você encontra o formulário para criar um novo usuário no sistema com suas informações e dados de acesso. É importante usar um email de acesso que seja real para recuperação de acesso ao sistema e uma senha que possa memorizar.

## Página de acesso (/login):

Nesta página você encontra o formulário de acesso ao sistema. É preciso enviar a combinação correta de email e password cadastrado na página de registro para obter acesso ao sistema.

## Página de anúncio (/product):

Nesta página você obtém todas as informações do anúncio, além de albúm de fotos (6 max), acesso para ler e escrever comentários e link para página do anunciante.

## Página de anunciante (/profile?id=user_id):

Nesta página você obtém todas as informações sobre o usuário anunciante e uma lista de seus anúncios, sejam os ativos, ou inativos, que não são listados na página principal. Caso a página de anúnciante for a do usuário logado, se obtém acesso ao modal com formulário para adicionar, editar, ativar/desativar ou deletar um anúncio.
