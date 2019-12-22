const dateForm = Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}).format;

export default dateForm;
