Apresentação do Projeto
 Visão Geral do Projeto
Este projeto consiste no desenvolvimento de uma aplicação web para gerenciamento de agendamentos, utilizando tecnologias modernas no front-end e back-end.
O sistema permite que usuários realizem cadastro, login e agendamentos de forma simples, segura e integrada a serviços externos.


Tecnologias Utilizadas
Frontend: Vue.js + TypeScript


Backend: Node.js + Express


Banco de Dados: MongoDB


Autenticação: JWT (JSON Web Token)


APIs externas:


ViaCEP (consulta de endereço)


OpenWeatherMap (previsão do tempo)




 Planejamento do Projeto
Nesta etapa foram definidas as bases do sistema:
Definição das funcionalidades principais


Criação do escopo do sistema


Desenvolvimento de protótipos das telas (wireframes)


Organização da arquitetura do sistema




 Desenvolvimento do Backend
O backend foi desenvolvido utilizando Node.js com Express, responsável por toda a lógica do sistema.
Principais implementações:
Estruturação de rotas e controllers


Criação de endpoints:


Login


Cadastro de usuários


Agendamento de consultas


Integração com banco de dados MongoDB




Autenticação e Segurança
Foi implementado um sistema de autenticação baseado em JWT:
Geração de token no login do usuário


Middleware para proteção de rotas privadas


Controle de acesso para usuários autenticados




6. Integração com APIs Externas
O sistema foi enriquecido com integrações externas:
ViaCEP: preenchimento automático de endereço a partir do CEP


OpenWeatherMap: exibição da previsão do tempo no dia do agendamento




Desenvolvimento do Frontend
O frontend foi desenvolvido com Vue.js e TypeScript, garantindo reatividade e organização do código.
Principais funcionalidades:
Formulários de login e cadastro


Tela de agendamento


Painel administrativo


Listagem de agendamentos


Consumo da API e exibição dinâmica de dados




Conclusão
O projeto possibilitou a aplicação prática de conceitos de desenvolvimento web full stack, incluindo:
Desenvolvimento de APIs REST


Integração entre frontend e backend


Autenticação segura com JWT


Consumo de APIs externas


Estruturação de uma aplicação escalável


Durante o desenvolvimento, o sistema foi implementado com sucesso e todas as funcionalidades foram criadas conforme o planejado. No entanto, houve uma limitação técnica na etapa de integração com o banco de dados, onde a conexão com o MongoDB não foi totalmente estabelecida, impedindo o armazenamento persistente das informações.
Mesmo assim, o projeto cumpriu seu objetivo principal de demonstrar o funcionamento da arquitetura e das tecnologias utilizadas.

site do deploy: https://davispinellomoreno-creator.github.io/atendimento-project/

```sh
npm run build
```
