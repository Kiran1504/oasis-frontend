// Component for the TextFields

export default function TextFields({ title, setTitle, text, setText, words, setWords }) {

  // Basic structuring for the display for words in textarea

  const wordsDisplay = 'Words: ' + words + '/' + '200';
  const warning = "Maximum word count reached";

  const updateTitle = (value) => {
    setTitle(value);
  }

  const updateWords = (newText) => {

    // Case for if words are already 200

    if (words === 200 && newText.length > text.length && newText.endsWith(' ')) {
      return;
    }

    // The regex is making sure 2 white spaces dont get considered as a word

    const filteredWords = newText.split(/\s+/).filter((word) => word.trim() !== '');

    // Case for setting the new inputs

    if (filteredWords.length <= 200) {
      setText(newText);
      setWords(filteredWords.length);
    }
  }
  return (
    <section className="flex flex-col gap-4">
      <input placeholder="Title" className="p-2 text-black bg-slate-200 rounded-md" onChange={(e) => updateTitle(e.target.value)}></input>
      <textarea placeholder="Write a caption..." rows={5} value={text} onChange={(e) => updateWords(e.target.value)} className="text-black bg-slate-200 p-2 h-full rounded-md resize-none"></textarea>
      <div className="flex flex-row gap-4">
        <div>{wordsDisplay}</div>
        <div className={`${words === 200 ? 'display-inline-block' : 'hidden'} text-red-500 font-bold`}>
          {warning}
        </div>
      </div>
    </section>
  )
}
