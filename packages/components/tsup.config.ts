import { defineConfig } from "tsup";
import { config } from "../../tsup.base.config";

export default defineConfig((cmdConfig) => {
  const _config = config(cmdConfig);

  return {
    ..._config,
    external: [...(_config.external as string[]), "framer-motion"],
  };
});
