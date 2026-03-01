export type Header = {
  key: string;
  value: string;
};

export type RestState = {
  method: string;
  url: string;
  headers: Header[];
  body: string;
  responseStatus: string;
  responseBody: string;
  isLoading: boolean;
  error: string | null;
};
