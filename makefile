
format:
	npm run format

lint:
	npm run lint
	npm run typecheck

codegen:
	npm run codegen
	npm run abi:gen

release: all
	ifndef GITHUB_TOKEN
		$(error GITHUB_TOKEN is not set)
	endif
	npm run release


all: codegen format lint
