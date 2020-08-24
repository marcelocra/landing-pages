import { parseISO } from 'date-fns';
import { useEffect, useState } from 'react';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  const [lang, setLang] = useState('pt-BR');

  useEffect(() => {
    setLang(window.navigator.language);
  }, []);

  return (
    <time dateTime={dateString}>
      {date.toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' })}
    </time>
  );
}

// format(date, 'LLLL d, yyyy')
