# Google Apps Script - Exemplo de Integração com Google Sheets

Este é um exemplo simples de como criar uma integração entre uma página da web HTML e uma planilha do Google Sheets usando o Google Apps Script. Neste exemplo, quando um botão é clicado na página da web, uma função é acionada no lado do servidor para alterar o valor da célula A1 na planilha.

## Arquivos de Código

### index.html

O arquivo HTML contém um botão com o ID "enviarBotao" e um script que adiciona um evento de clique ao botão. Quando o botão é clicado, ele chama a função `alterarCelula_A1()` do Google Apps Script.

### main.gs

O arquivo `main.gs` contém duas funções:

- `doGet()`: Esta função é executada quando a página da web é carregada. Ela cria uma saída HTML a partir do arquivo `index.html` para exibir na página.

- `alterarCelula_A1()`: Esta função é chamada quando o botão é clicado na página da web. Ela obtém a planilha ativa e altera o valor da célula A1 para 1.

## Como Usar

1. Crie uma planilha no Google Sheets e nomeie-a como "db" (ou atualize o nome da planilha na função `getSheetByName` conforme necessário).

2. No Google Apps Script, crie um projeto e cole o código do arquivo `main.gs`.

3. Publique o projeto como uma Web App. Para fazer isso, vá em "Publicar" -> "Implantar como Web App" e siga as instruções.

4. Após a implantação, copie a URL da Web App gerada.

5. Cole a URL da Web App em um navegador para acessar a página da web. Você verá um botão "Enviar" na página.

6. Quando você clicar no botão "Enviar", a função `alterarCelula_A1()` será acionada e o valor da célula A1 na planilha "db" será definido como 1.

Isso é apenas um exemplo básico de como integrar uma página da web com o Google Sheets usando o Google Apps Script. Você pode expandir esse projeto para realizar tarefas mais complexas e personalizadas de acordo com suas necessidades. Certifique-se de ajustar as permissões de acesso conforme necessário para proteger seus dados.
