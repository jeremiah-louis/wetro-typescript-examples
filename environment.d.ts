declare global {
    namespace NodeJS {
      interface ProcessEnv {
        WETRO_API_KEY: string;
        OPENAI_API_KEY: string;
      }
    }
  }
  
  export {};
  