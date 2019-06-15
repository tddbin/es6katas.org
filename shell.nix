with import (fetchTarball https://github.com/nixos/nixpkgs/tarball/f52505fac8c82716872a616c501ad9eff188f97f) { };

stdenv.mkDerivation {
    name = "dev-shell";
    src = null;
    buildInputs = [ nodejs-11_x ];
}
