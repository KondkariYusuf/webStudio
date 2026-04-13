import { spawn } from "node:child_process";

const start = (command) =>
  spawn(command, {
    stdio: "inherit",
    env: process.env,
    shell: true,
  });

const postgrest = start("npm run dev:postgrest");
const builder = start("npm run dev:builder");

let stopping = false;

const stopAll = () => {
  if (stopping) {
    return;
  }
  stopping = true;

  if (postgrest.killed === false) {
    postgrest.kill("SIGINT");
  }

  if (builder.killed === false) {
    builder.kill("SIGINT");
  }
};

process.on("SIGINT", stopAll);
process.on("SIGTERM", stopAll);

postgrest.on("exit", (code) => {
  if (stopping === false && (code ?? 0) !== 0) {
    console.error(`PostgREST exited with code ${code}`);
    stopAll();
    process.exit(code ?? 1);
  }
});

builder.on("exit", (code) => {
  stopAll();
  process.exit(code ?? 0);
});
