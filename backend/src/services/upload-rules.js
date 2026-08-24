const CATEGORIES = {
  image: ['image/jpeg', 'image/png', 'image/webp'],
  pdf: ['application/pdf'],
  word: [
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
};

export function normalizeUploadConfig(fieldType, input) {
  if (!['file', 'image', 'signature'].includes(fieldType)) return null;
  const configuredSize = Number(input?.maxSizeMb);
  const maxSizeMb = Number.isFinite(configuredSize) && configuredSize > 0 ? configuredSize : 5;
  const allowedTypes =
    fieldType === 'file'
      ? [...new Set(Array.isArray(input?.allowedTypes) ? input.allowedTypes : [])].filter(
          (type) => type in CATEGORIES,
        )
      : ['image'];
  return {
    maxSizeMb,
    allowedTypes: allowedTypes.length ? allowedTypes : ['image', 'pdf', 'word'],
  };
}

export function allowedMimeTypes(field) {
  const config = normalizeUploadConfig(field.type, field.uploadConfig);
  return new Set((config?.allowedTypes || []).flatMap((type) => CATEGORIES[type] || []));
}

export function extensionForMimeType(mimeType) {
  return (
    {
      'image/jpeg': '.jpg',
      'image/png': '.png',
      'image/webp': '.webp',
      'application/pdf': '.pdf',
      'application/msword': '.doc',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
    }[mimeType] || ''
  );
}
