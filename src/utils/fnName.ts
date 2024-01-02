const getFnName = (
  tags: {
    key: string;
    value: string;
  }[]
) => tags.find(tag => tag.key === 'functionName')?.value ?? '';

export { getFnName };
