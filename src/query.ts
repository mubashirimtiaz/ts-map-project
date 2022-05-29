export const addScript = (
  context: 'internal' | 'external',
  content: string
): void => {
  const script = document.createElement('script');
  script.type = `text/javascript`;
  if (context === 'internal') {
    script.innerHTML = content;
  } else {
    script.src = content;
  }
  document.getElementsByTagName(`body`)[0].appendChild(script);
};

export const mapDiv = document.getElementById('map');
