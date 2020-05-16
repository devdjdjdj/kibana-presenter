# Kibana-Presenter

[![Join the chat at https://gitter.im/kibana-presenter/users](https://badges.gitter.im/kibana-presenter/users.svg)](https://gitter.im/kibana-presenter/users?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A presenter for kibana with auto scroll (for TVs)


## How to Use (Recommended)

1. ### Clone the repo

      `https://github.com/devdjdjdj/kibana-presenter.git`
    
2. ### Download dependencies

    `npm install` or `yarn install`

3. ### Run the application

    `npm run dev` or `yarn dev`

    The application will run on port 3000 by default. Use the `-p` flag to specify the port. Example: `yarn dev -p 3001 `

3. ### Add dashboards

    Go to `http://localhost:3000/admin` 

4. ### Build the application

    * ### Without Admin Console
        `npm run prod` or `yarn prod`

    * ### With Admin Console
        `npm run build` or `yarn build`

5. ### Deploy

    `npm start` or `yarn start`

    All your dashboards could now be found at `http://localhost:3000/` 
    
    The application will run on port 3000 by default. Use the `-p` flag to specify the port. Example: `npm start -p 8080 `
