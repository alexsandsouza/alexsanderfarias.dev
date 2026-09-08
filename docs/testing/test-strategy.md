# Estratégia de Testes Automatizados: alexsanderfarias.dev

Este documento detalha o planejamento de testes de ponta a ponta, integração e unidade para assegurar a confiabilidade do sistema.

---

## 1. Pirâmide de Testes e Ferramentas

```
           / \
          /   \     End-to-End (Playwright)
         /  E2E\    - Navegação, i18n, formulário, mobile
        /-------\
       / Compon. \  Component Tests (React Testing Library)
      /   Tests   \ - Renderização de cards, botões de cópia, modal
     /-------------\
    /  Unit Tests   \ Unit Tests (Vitest)
   /                 \ - Sanitizadores, schemas Zod, utilitários, BibTeX
  /-------------------\
```

## 2. Cobertura e Escopo dos Testes

### 2.1 Testes Unitários (`tests/unit/*`)
- **Sanitização de String:** Verificar remoção de tags maliciosas, caracteres inválidos e scripts.
- **Schemas Zod:** Testar payloads válidos e rejeição precisa de campos com mensagens de erro tipadas.
- **Gerador BibTeX:** Testar formatação de publicações com caracteres especiais, acentuação e múltiplos autores.
- **Cálculo de Tempo de Leitura:** Validar estimativa correta de minutos por palavras em posts MDX.

### 2.2 Testes de Componentes (`tests/component/*`)
- **ImpactMetrics:** Renderização correta com rótulos e placeholders transparentes.
- **BibTeXCopyButton:** Simulação de clique, chamada à API de Clipboard e transição de estado visual.
- **LanguageSwitcher:** Renderização das opções `pt-BR` e `en-US` e link com slug correto.

### 2.3 Testes Ponta a Ponta (`tests/e2e/*`)
- **Navegação Multilíngue:** Acessar rota padrão, verificar redirecionamento, alternar idioma e checar canonical tags.
- **Fluxo do Case Study:** Entrar em `/projects`, clicar no projeto "Avalia 2.0", validar a presença das 11 seções técnicas.
- **Proteção do Formulário de Contato:**
  - Submissão com campo honeypot preenchido (não envia e-mail, retorno limpo).
  - Submissão válida com mensagem de sucesso.
- **Verificação de Quebras 404:** Acessar rota inexistente e garantir renderização da página 404 sem crash.

## 3. Critérios de Execução no CI
- Nenhum PR pode ser integrado à branch `main` se a suíte de testes unitários ou de integração falhar.
- O tempo total de execução da bateria de testes no CI deve ser inferior a 3 minutos.
