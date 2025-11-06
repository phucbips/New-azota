
{ pkgs, ... }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.git
    pkgs.lsof # Add lsof to the environment
    pkgs.unzip
  ];
  idx = {
    extensions = [
      "dbaeumer.vscode-eslint"
    ];
    workspace = {
      onCreate = {
        npm-install = "cd my-app && npm install";
      };
      onStart = {
        dev-server = "npm run start --prefix my-app";
      };
    };
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "start" "--prefix" "my-app" "--" "--port" "$PORT"];
          manager = "web";
        };
      };
    };
  };
}
