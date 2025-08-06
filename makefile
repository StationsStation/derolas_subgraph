
format:
	npm run format

lint:
	npm run lint
	npm run typecheck

codegen:
	npm run codegen
	npm run abi:gen

all: codegen format lint
