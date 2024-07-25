{
  description = "My portfolio showcases my skills, features my CV written in Typst, highlights my projects, and includes my blog";
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    git-hooks.url = "github:cachix/git-hooks.nix";
  };

  outputs = { self, nixpkgs, flake-utils, git-hooks, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = import nixpkgs { inherit system; };
      in {
        checks.pre-commit-check = git-hooks.lib.${system}.run {
          src = ./.;
          hooks = { prettier.enable = true; };
        };
        devShells.default = pkgs.mkShell {
          inherit (self.checks.${system}.pre-commit-check) shellHook;
          buildInputs = self.checks.${system}.pre-commit-check.enabledPackages
            ++ (with pkgs; [ nodejs_20 typst corepack_20 typstyle ]);
        };
      });
}
