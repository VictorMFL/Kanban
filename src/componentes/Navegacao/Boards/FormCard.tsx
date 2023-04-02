import React from "react";


type FormProps = {
  id?: number;
  title: string;
  description: string;
  hastag?: string;
};

const FormCard = ({ fecharForm, setCard, card }) => {
  const [titleValue, setTitleValue] = React.useState("");
  const [descriptionValue, setDescriptionValue] = React.useState("");
  const [hastagValue, setHastagValue] = React.useState("");

  function handleSave(item: FormProps) {
    console.log(item);
    return item;
  }

  const handleSubmit = (event: any | FormProps) => {
    event.preventDefault();
    const dadosNovos = handleSave({
      id: Math.random(),
      title: titleValue,
      description: descriptionValue,
      hastag: hastagValue,
    });
    fecharForm(false);

    setCard([...card, dadosNovos]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form" >
        <input
          type="text"
          id="title"
          placeholder="title"
          value={titleValue}
          onChange={({ target }) => setTitleValue(target.value)}
          autoComplete="off"
        />

        <input
          type="text"
          id="description"
          placeholder="description"
          value={descriptionValue}
          onChange={({ target }) => setDescriptionValue(target.value)}
          autoComplete="off"
        />

        <input
          type="text"
          id="hastag"
          placeholder="hastag"
          value={hastagValue}
          onChange={({ target }) => setHastagValue(target.value)}
          autoComplete="off"
        />

        <button type="submit">Concluir</button>
      </form>
    </div>
  );
};

export default FormCard;
