FROM --platform=linux/amd64 node:18

# Define diretório de trabalho
WORKDIR /app

# Copia somente os arquivos de dependência
COPY package.json yarn.lock ./

# Instala o Yarn e dependências do projeto
RUN rm -rf node_modules package-lock.json
RUN corepack enable && yarn install

# Copia o restante da aplicação
COPY . .

# Expõe a porta usada pelo Vite
EXPOSE 3000

# Comando de inicialização em modo desenvolvimento
CMD ["yarn", "dev"]
