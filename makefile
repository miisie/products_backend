
autogenerate:
	@read -p "Enter migration name: " name; \
	npm run migration:generate -- database/migrations/$$name
run:
	npm run migration:run
revert:
	npm run migration:revert	