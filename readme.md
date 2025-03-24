# 🚜 Carregadeira Automatizada com ESP32 + API Node + Next.js

Projeto desenvolvido para avaliação da disciplina de **Projetos** do curso **Técnico em Eletromecânica**, no **Colégio Estadual Professor Gastão Valle**.

---

## 📚 Descrição

Este projeto consiste no desenvolvimento de uma **carregadeira automatizada**, controlada por meio de uma **placa eletrônica ESP32**, integrada a um sistema completo com **API Node.js/Express** e **interface web** desenvolvida em **Next.js com TailwindCSS**. O sistema permite armazenar e modularizar dados relevantes, facilitando a comunicação entre hardware e software.

---

## 🧹 Tecnologias e Ferramentas Utilizadas

### 🔧 Hardware
- **ESP32** — Microcontrolador com Wi-Fi/Bluetooth
- **Servo motor mg996r**  - Servo utilizado para tracion e controlar a pá
- **Servo motor MG90s** - Servo utilizado para controlar a direção
- **Protoboard** - Construir e organizar o circuito

### 💻 Software
- **Plataforma de Desenvolvimento**: VS Code com PlatformIO
- **Linguagem (Firmware)**: C++ (ESP32)
- **Backend**: Node.js + Express (API REST para armazenamento de dados) + Typescript
- **Frontend**: Next.js + TailwindCSS (Interface visual e monitoramento) + Typescript

---

## ⚙️ Funcionalidades

- Controle de motores via ESP32
- Armazenamento de dados operacionais na API 
- Monitoramento via interface web
- Comunicação modular entre frontend, backend e ESP32
- Movimentação: frente, ré, giro e acionamento da pá

---

## 📆 Objetivos do Projeto

- Aplicar conhecimentos teóricos em um projeto prático
- Programar sistemas embarcados com ESP32
- Desenvolver soluções de automação com aplicação mecânica
- Estimular o trabalho em equipe, planejamento e execução

---


### 🚀 Firmware (ESP32)

1. Instale o [VS Code](https://code.visualstudio.com/) e a extensão **PlatformIO IDE**
2. Acesse a pasta `firmware/`
3. Conecte a placa ESP32 via USB
4. Compile e envie o código:
   ```bash
   pio run --target upload
   ```
5. Monitor serial:
   ```bash
   pio device monitor
   ```

---

### 🌐 Backend (Node.js/Express)

1. Acesse a pasta `backend/`
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie a API:
   ```bash
   npm start
   ```
4. A API estará disponível em: `http://localhost:3001`

---

### 🔠 Frontend (Next.js + TailwindCSS)

1. Acesse a pasta `dashboard/`
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie a aplicação:
   ```bash
   npm run dev
   ```
4. Acesse a interface em: `http://localhost:3000`

---

## 🏫 Instituição de Ensino

**Colégio Estadual Professor Gastão Valle**  
Curso Técnico em Eletromecânica

---

## 📄 Licença

Este projeto é de caráter educacional e não possui fins lucrativos.

---

## 💡 Extras (Ideias Futuras)

- Controle remoto via aplicativo mobile
- Monitoramento em tempo real via WebSocket

