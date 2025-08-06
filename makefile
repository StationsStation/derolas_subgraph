
format:
	npm run format

lint:
	npm run lint
	npm run typecheck

codegen:
	npm run codegen
	npm run abi:gen

release: all
	# check that the GH_TOKEN is set
	ifndef GH_TOKEN
		$(error GH_TOKEN is not set)
	endif
	npm run release


all: codegen format lint
