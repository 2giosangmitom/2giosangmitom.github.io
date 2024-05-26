{
  description = "Portfolio built with Nuxt.js to showcase skills and projects in an engaging way.";
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
  };

  outputs = {
    nixpkgs,
    ...
  }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
      config = {
        allowUnfree = true;
      };
    };
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        alejandra
        nil
        nodejs_20
        corepack_20
        typst
      ];
    };
    formatter.${system} = pkgs.alejandra;
  };
}
