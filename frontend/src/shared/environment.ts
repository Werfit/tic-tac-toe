const validate = () => {
  if (import.meta.env.VITE_GAME_API === undefined) {
    throw new Error("VITE_GAME_API is absent");
  }

  return {
    gameApi: import.meta.env.VITE_GAME_API,
  } as const;
};

export const environment = validate();
