Trabalho 2: Funcionalidade do Cliente da Aplicação Pet Shop
Introdução ao Desenvolvimento Web – 1º sem. 2018
Grupo:
	Chan Ken Chen - 9436170
	Cristiano Chiaramelli - 9293053
	Elisa Saltori Trujillo - 8551100
	Valeska Paroni Silva - 

Framework utilizado:
	React

Bibliotecas utilizadas:
	Router (para transformação da aplicação em uma Single Page Application)
	Redux (para gerenciamento de dados e estados)
	

Para logar no sistema:
	-Dois usuários são inicialmente providenciados, um administrador e um cliente.
		Administrador:
			admin@email.com
			pass123
		
		Cliente:
			cliente@email.com
			pass123


Para compilar aplicação:
	- Instalar nodejs e npm: https://nodejs.org/en/download/package-manager/
	- Acessar diretório da aplicação
	- Executar o comando "npm install" no terminal para instalar dependências
	- Executar o comando "./node-modules/.bin/webpack"
	- Abrir index.html em um browser


Lista de Arquivos:
	-index.html: arquivo principal da aplicação
	-index.js: arquivo principal em JavaScript, utilizado para gerar index.html
	-package.json e package-lock.json: contêm a lista de dependências para 
compilação da aplicação
	-./images: diretório que contém todas as imagens utilizadas pela aplicação

	-./resources: diretório que contém os arquivos .json utilizados como dados
iniciais da aplicação
		-pets.json: pets cadastrados no sistema
		-productCatalog.json: produtos cadastrados no sistema
		-servicesCatalog.json: serviços cadastrados no sistema
		-productsCategories.json: produtos exibidos na tela inicial
		-servicesCategories.json: serviços exibidos na tela inicial

	-./src: arquivos-fonte da aplicação.
		-App.js: js da página da aplicação. Contém o header, o conteúdo da
página e o footer. O conteúdo da página é alterado como necessário utilizando o 
Router.
		-styles.css: arquivo de estilo utilizado pela aplicação.

		-./actions: diretório que contém as ações que podem ser executadas
sobre a store (Redux)
			-index.js: arquivo que contém as ações que podem ser 
executadas sobre a store (Redux)

		-./controls: componentes básicos da aplicação
			-Button.js: componente botão
			-Header.js: componente header da página
			-Image.js: componente imagem
			-Input.js: componente input
			-InvalidAccessMessage.js: componente que mostra uma mensagem
de erro quando o usuario acessa uma página indevida
			-Link.js: componente link
			-LoginForm.js: componente formulário de login (usado em Header)

		-./footer: diretório que contém o componente footer
			-Footer.js: componente que renderiza o footer da página

		-./pages: diretório que contém os compontenes que formam cada "página"
da aplicação
			-./cart: diretório da página do carrinho de compras
				-Cart.js: componente do carrinho de compras
			-./edit-user: diretório página de editar o cadastro de um usuário
				-EditUser.js: componente da página de editar cadastro
				-DataUpdated.js: mensagem de sucesso ao editar usuário
			-./home-page: diretório que contém a página inicial da aplicação
				-HomePage.js: componente da página inicial
			-./my-pets: diretório que contém a página "Meus Pets"
				-MyPets.js: componente da página "Meus Pets" (exibe os
pets cadastrados de um usuário)
			-./payment: diretório que contém a página de pagamento
				-Payment.js: componente da página de pagamento (com formulário)
				-PaymentSuccess.js: mensagem de sucesso ao realizar pagamento
			-./products: diretório que contém a página de produtos
				-Product.js: componente de exibição de um único produto
				-Products.js: componente da página de produtos, exibe
vários componentes Product
			-./register-pet: diretório que contém página de registrar um pet
				-RegisterPet.js: componente da página de registrar um pet
			-./register-products: diretório da página de registrar um produto
				-RegisterProduct.js: componente de registrar um produto
			-./register-user: diretório da página de cadastrar usuário (aces-
sível pelo admin)
				-RegisterUser.js: componente da página de cadastro de usuário
				-UserCreated.js: mensagem de sucesso ao criar usuário

		-./pet-client-form: diretório que contém os formulários de criar e editar
usuário
			-RegisterClient.js: componente com formulário de cadastro de usuário
			-EditClient.js: componente com formulário de edição de usuário
			
		-./pets: diretório que contém unidade Pet exibida em MyPets.js
			-Pet.js: componente unitária que exibe os dados de um pet
	
		-./product-form: diretório que contém o formulário de cadastro de produto
			-RegisterProductForm: formulário de cadastro de produto

		-./reducers: diretório que contém os reducers utilizados pela aplicação (REDUX)
			-index.js: arquivo que unifica reducers
			-cartReducer.js: reducers relativos ao carrinho de compras
			-petsReducer.js: reducers relativos a pets
			-productsReducer.js: reducers relativos a produtos
			-servicesReducer.js: reducers relativos a serviços
			-usersReducer.js: reducers relativos a usuários
	
