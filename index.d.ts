declare module '@apiverve/useragentparser' {
  export interface useragentparserOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface useragentparserResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class useragentparserWrapper {
    constructor(options: useragentparserOptions);

    execute(callback: (error: any, data: useragentparserResponse | null) => void): Promise<useragentparserResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: useragentparserResponse | null) => void): Promise<useragentparserResponse>;
    execute(query?: Record<string, any>): Promise<useragentparserResponse>;
  }
}
