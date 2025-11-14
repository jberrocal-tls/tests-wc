// Suppress React warnings about unknown properties on custom elements
if (typeof window !== 'undefined') {
  const origError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: React does not recognize')
    ) {
      return;
    }
    origError(...args);
  };
}
