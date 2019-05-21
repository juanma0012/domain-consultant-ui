# Domain Consultant (Frontend)
This repository provides the interface to get the information of a domain. Also, the previous record are shown using the history button.

## Apps URL
You can play with the app in [http://juanma0012.gitlab.io/domain-consultant-ui/#/](http://juanma0012.gitlab.io/domain-consultant-ui/#/ "http://juanma0012.gitlab.io/domain-consultant-ui/#/")

Note: this is only available in http protocol, because of the endpoint only accept http requests in the port 3333. For that reason I uploaded the app to Gitlab pages instead of Github pages (it is already [there]( https://juanma0012.github.io/domain-consultant-ui/ "there") but contains issues with blocked:mixed-content)
#### Implemented technologies
- Javascript (Language)
- Vue (Library)
- Vuex (State management pattern)
- Jest (Unit testing)
- Vue Resource (Http service)

#### Running app
1. Install the dependencies  `$ npm run install`
3. Execure the local server `$ npm run serve`

#### Building the artifact
1. Execute the command `$ npm run build`

The folder 'dist' will be generated, this contains the app for production environment.

#### Running Unit testings
1. execute the command `$ npm run test:unit`

Those unit testings are validating the Flux architecture, I mean,  the state used with Vuex. Check the getters and mutations.

#### Folder Structure
On this repository  will  find those files:


	├── babel.config.js
	├── jest.config.js
	├── src
	│   ├── App.vue
	│   ├── api
	│   │   └── index.js
	│   ├── assets
	│   ├── components
	│   │   ├── DomainConsultant.vue
	│   │   ├── Outcome.vue
	│   │   ├── Record.vue
	│   │   ├── Records.vue
	│   │   ├── Search.vue
	│   │   └── SearchField.vue
	│   ├── main.js
	│   ├── plugins
	│   │   └── bootstrap-vue.js
	│   ├── router.js
	│   └── vuex
	│       ├── actions.js
	│       ├── getters.js
	│       ├── mutation_types.js
	│       ├── mutations.js
	│       └── store.js
	├── tests
	│   └── unit
	│       ├── getters.spec.js
	│       └── mutations.spec.js
	└── vue.config.js
    
