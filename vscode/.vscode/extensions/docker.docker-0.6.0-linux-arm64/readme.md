# Docker DX

The **Docker DX (Developer Experience)** Visual Studio Code extension enhances your Visual Studio Code experience with Docker-related development by adding rich editing features and vulnerability scanning.

The Docker DX extension is shipped as part of [Microsoft's Docker extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) as an optional dependency.

## Key features

- [Dockerfile linting](https://docs.docker.com/reference/build-checks/): Get build warnings and best-practice suggestions via BuildKit and BuildX.
- [Bake](https://docs.docker.com/build/bake/) file support: Includes code completion, variable navigation, and inline suggestions for generating targets based on your Dockerfile stages.
- [Compose file](https://docs.docker.com/reference/compose-file/) outline: Easily navigate complex Compose files with an outline view in the editor.
- Image vulnerability scanning (experimental): Flags references to container images with known vulnerabilities directly within Dockerfiles.

## Requirements

The extension requires Docker Engine to be running. [Install Docker Desktop](https://www.docker.com/get-started/) on your machine and make sure the `docker` CLI is available in your system `PATH`.

This extension currently supports the following operating systems and architectures:

| Operating system | Architectures    |
| ---------------- | ---------------- |
| Windows          | `amd64`, `arm64` |
| macOS            | `amd64`, `arm64` |
| Linux            | `amd64`, `arm64` |
| Alpine           | `amd64`, `arm64` |

If you are on an unsupported system, let us know of your interest in this extension so we can prioritize the work accordingly.

## Feature overview

### Editing Dockerfiles

You can get linting checks from [BuildKit](https://github.com/moby/buildkit) and [BuildX](https://github.com/docker/buildx) when editing your Dockerfiles.

Any references to images with vulnerabilities are also flagged. Note: This is an experimental feature.

Errors are visible directly in your editor or you can look at them by opening up the Problems panel (<kbd>Ctrl+Shift+M</kbd> on Windows/Linux, <kbd>Shift+Command+M</kbd> on Mac).

![Linting a Dockerfile for build warnings and the use of vulnerable images](https://github.com/docker/vscode-extension/raw/HEAD/resources/readme/dockerfile-problems.png)

### Editing Bake files

You can get code completion when editing your `docker-bake.hcl` file. You are also able to hover over variables and navigate around the file by jumping to a variable's definition or jumping to the build stage within a Dockerfile.

![Editing a Bake file with code completion and cross-file linking support](https://github.com/docker/vscode-extension/raw/HEAD/resources/readme/docker-bake-editing.png)

The extension provides inline suggestions to generate a Bake target to correspond to each build stage in your Dockerfile.

![Suggesting Bake targets based on the content of the local Dockerfile](https://github.com/docker/vscode-extension/raw/HEAD/resources/readme/docker-bake-inline-completion.png)

### Editing Compose files

You can view an outline of your Compose file which makes it easier to navigate.

![Outline of a Docker Compose file in the Outline panel and from the Command Palette](https://github.com/docker/vscode-extension/raw/HEAD/resources/readme/docker-compose-outline.png)

## Builds

[GitHub Actions](https://github.com/docker/vscode-extension/actions) builds six `.vsix` files - one for each platform combination(Windows, macOS, Linux x `amd64`/`arm64`).

Note: The language server binary from these builds are not signed and/or notarized. You may encounter issues when using `.vsix` files from this repository as your operating system may refuse to open an unsigned binary.

## Development

To debug the VS Code extension, clone this repository and then run `npm install`. This will download a binary of the [Docker Language Server](https://github.com/docker/docker-language-server/releases) to the `bin` folder. If you would like to test your own custom build of the language server, simply replace the file in the `bin` folder with your own binary.

### Debugging both the extension and language server

1. Clone the [docker/docker-language-server repository](https://github.com/docker/docker-language-server)
2. Start the language server in debug mode with the `--address :49201` argument.
3. In VS Code, update the `docker.lsp.debugServerPort` setting to `49201`. This is the default port that is used for any launch configurations saved in Git.
4. Launch the extension in debug mode. It will connect to the language server you started in debug mode instead of trying to execute a binary in `bin/`.

### Testing

Run `npm test` to launch the UI tests.

## Telemetry

See [TELEMETRY.md](https://github.com/docker/vscode-extension/blob/HEAD/TELEMETRY.md) for details about what kind of telemetry we collect and how to configure your telemetry settings.
