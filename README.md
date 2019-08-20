# differential
Explorative Repo for Browser Game Tools/Techniques

# goals
- procedural engine exploration
- babylon js implementation/interaction
	- programmatic shaders, maps, and origins
- 3d view control in js
- data management/local storage as a means to store progress through a system
- build/inclusion of 3D assets that work with procedural engine
- test inclusion

All that should be needed is an npm install and a run of gulp (to generate dist folder) once cloned for this to be up and running locally.

## Usage
**Development**

`npm run start-dev`

* Build app continuously (HMR enabled)
* App served @ `http://localhost:8080`

**Production**

`npm run start-prod`

* Build app once (HMR disabled) to `/dist/`
* App served @ `http://localhost:3000`

---

**All commands**

Command | Description
--- | ---
`npm run start-dev` | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`
`npm run start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000`
`npm run build` | Build app to `/dist/`
`npm run test` | Run tests
`npm run lint` | Run Typescript linter
`npm run lint --fix` | Run Typescript linter and fix issues
`npm run start` | (alias of `npm run start-dev`)
