# Projeto Extenso

> Projeto Certi - Processo Seletivo - Projeto N* Extenso

## Descrição

Esta aplicação visa receber valores númericos, a partir de uma interface gráfica, e replica-los por extenso!

Para sua criação, foram utilizadas as seguintes linguagens:

- HTML
- CSS
- JavaScript

## Instalação

No primeiro momento, o usuário deverá ter instalado em sua máquina os seguintes softwares e aplicações:

- Python
- Visual Code
- Node

Vale lembrar que será necessário startar a configuração de execução de scripts remotos na máquina em questão. Para isso, o usuário deverá abrir a linha de comando e inserir o seguinte código: 

```js
Set-ExecutionPolicy RemoteSigned
```
Após isso, bastará aplicar os comandos de instalação da aplicação no gerenciador, sendo eles: 

```js
npm i 
```
```js
npm install pm2 -g
```
```js
pm2 start ../ProjetoNumExtenso/bin/www --name="ExtensaoNumeros" -i 1 --log-date-format="DD-MM-YYYY hh:mm:ss"
```

OBS: Vale o lembrete de outros comandos também, sendo eles:

- Exibir status da aplicação
```js
pm2 list
```
- Exibir logs de requisição
```js
pm2 log
```
- Em caso de novas alterações
```js
pm2 restart all
```
Diante disso, toda a aplicação já estará sendo executada em tempo real na máquin em questão. Porém, para que o usuário tenha uma interface mais amigável/apresentável, este deverá se dirigir até o diretório:
```js
"../Front-End" 
```
e executar o arquivo de nome:
```js
index.html
```
Esta será a interface de exibição, onde o usuário poderá indicar os valores númericos que deseja exibir por extenso!

OBS: Vale lembrar que o intervalo de números está entre -9999;9999.

