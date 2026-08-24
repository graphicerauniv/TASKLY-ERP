export function notFound(request, response) {
  response
    .status(404)
    .json({ message: `Route ${request.method} ${request.originalUrl} was not found.` });
}

export function errorHandler(error, request, response, next) {
  void request;
  void next;
  if (error.code === 11000)
    return response
      .status(409)
      .json({ message: 'A record with the same unique value already exists.' });
  if (error.name === 'ZodError') {
    const issue = error.issues?.[0];
    const field = issue?.path?.length ? `${issue.path.join('.')}: ` : '';
    return response.status(400).json({
      message: `${field}${issue?.message || 'Invalid request data.'}`,
      issues: error.issues || [],
    });
  }
  if (error.name === 'MulterError') return response.status(400).json({ message: error.message });
  const status = error.status || 500;
  if (status >= 500) console.error(error);
  response
    .status(status)
    .json({ message: status >= 500 ? 'An unexpected server error occurred.' : error.message });
}
