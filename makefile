
auto-ubuntu:
	@read -p "Enter migration name: " name; \
	npm run migration:generate -- database/migrations/$$name
auto-windows:
	@set /p name="Enter migration name: " && \
	npm run migration:generate -- database/migrations/%name%	
up:
	npm run migration:run
down:
	npm run migration:revert