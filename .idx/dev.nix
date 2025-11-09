# To learn more about how to use Nix to configure your environment, see
# https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Specifies the Nixpkgs channel. It determines which package versions are
  # available in your environment.
  channel = "stable-24.05"; # or "unstable"

  # A list of packages to install from the specified channel. You can find
  # available packages at https://search.nixos.org/packages.
  packages = [
    pkgs.nodejs_20
    pkgs.pnpm # Add pnpm
  ];

  # A set of environment variables to be defined in your environment.
  env = { };

  # IDX-specific configuration
  idx = {
    # A list of VS Code extensions to install from the Open VSX Registry.
    # You can find available extensions at https://open-vsx.org/.
    extensions = [
      "dbaeumer.vscode-eslint"
    ];

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created.
      onCreate = {
        install-deps = "pnpm install --prefer-offline";
      };
      # Runs every time the workspace is (re)started.
      onStart = {
        # dev-server = "pnpm run dev"; # This will be handled by the preview
      };
    };

    # Web previews
    previews = {
      enable = true;
      previews = {
        web = {
          # The command to run to start the web server.
          # The $PORT variable is dynamically assigned by IDX.
          command = [ "pnpm" "run" "dev" "--" "--port" "$PORT" ];
          manager = "web";
        };
      };
    };
  };
}
