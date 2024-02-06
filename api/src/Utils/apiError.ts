interface ErrorProps {
  path: string;
  message: string;
}
type ErrorApi = ErrorProps[];

export const apiError = (path: string, message: string): ErrorApi => {
  return [
    {
      path,
      message,
    },
  ];
};
