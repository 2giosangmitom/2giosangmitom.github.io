build:
	@echo -e "🚀 \033[1;37mStarting build Docker image from Dockerfile\033[0m"
	docker build -o out .
	@echo -e "✅ \033[1;32mSuccessfully built Docker image\033[0m"

.SILENT: build