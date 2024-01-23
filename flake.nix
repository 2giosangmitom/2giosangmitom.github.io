{
  description = "My portfolio, made with Next.js";
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        packages = with pkgs; [
          nodejs_21
          corepack_21
        ];
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = packages;
        };
        formatter = pkgs.nixpkgs-fmt;
      }
    );
}
