# Critérios de Aceitação (Acceptance Criteria): alexsanderfarias.dev

Critérios de aceitação formulados em linguagem Gherkin (Given-When-Then) para guiar o desenvolvimento e os testes automatizados.

---

### Cenário 1: Troca de Idioma e Preservação de Contexto
```gherkin
Cenário: Alternância de idioma entre Português e Inglês
  Dado que um visitante está navegando na página "/pt/projects/avalia-2"
  Quando ele clica no seletor de idioma e escolhe "English (en-US)"
  Então a URL deve atualizar para "/en/projects/avalia-2"
  E o conteúdo do Case Study deve ser renderizado em inglês
  E a tag <html lang="en"> deve ser aplicada
  E os metadados canônicos e hreflang devem refletir o novo idioma
```

### Cenário 2: Exibição e Cópia de Citação Científica (BibTeX)
```gherkin
Cenário: Cópia da citação BibTeX de um artigo científico
  Dado que o usuário está na página de "/pt/publications"
  Quando ele localiza uma publicação indexada e clica no botão "Copiar BibTeX"
  Então o conteúdo da citação formatada em BibTeX deve ser copiado para a área de transferência
  E o botão deve exibir feedback visual temporário com ícone de sucesso e texto "Copiado!"
  E nenhum erro de console ou reload de página deve ocorrer
```

### Cenário 3: Submissão de Formulário de Contato com Honeypot
```gherkin
Cenário: Detecção de bot automatizado preenchendo campo Honeypot
  Dado que um bot de spam envia uma requisição POST para a Server Action de contato
  E o campo invisível "_gotcha" (honeypot) possui valor preenchido
  Quando o servidor processa a submissão
  Então o envio deve ser descartado silenciosamente sem disparo de e-mail
  E o servidor deve responder status 200 genérico para não alertar o bot
  E um log de segurança estruturado de advertência deve ser registrado
```

### Cenário 4: Submissão Legítima de Formulário com Validação Zod
```gherkin
Cenário: Visitante legítimo envia mensagem com dados válidos
  Dado que o visitante preenche nome "Maria Santos", email "maria@tech.com", assunto "Convite Palestra" e mensagem válida (> 20 caracteres)
  E o campo honeypot está vazio
  Quando ele clica em "Enviar Mensagem"
  Então o servidor valida o payload com schema Zod e sanitiza o conteúdo
  E o serviço de notificação por e-mail é acionado com sucesso
  E a interface exibe feedback positivo com mensagem de confirmação
  E os campos do formulário são redefinidos
```

### Cenário 5: Verificação de Acessibilidade por Teclado
```gherkin
Cenário: Navegação pelo cabeçalho utilizando exclusivamente a tecla Tab
  Dado que o usuário acessa a página inicial e pressiona a tecla "Tab"
  Então o primeiro elemento focado deve ser o Skip Link "Pular para o conteúdo principal"
  Quando o usuário pressiona "Enter" no Skip Link
  Então o foco do cursor deve ser deslocado diretamente para o elemento <main>
  E ao continuar navegando com "Tab", o foco visual deve ser demarcado com anel de foco de alto contraste
```
