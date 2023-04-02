import React from "react";

type FormProps = {
  id?: number;
  title: string;
  description: string;
  hastag?: string;
  afazer?: boolean;
  fazendo?: boolean;
  feito?: boolean;
};

const FormCard = ({ fecharForm, setCard, card }) => {
  const [titleValue, setTitleValue] = React.useState("");
  const [descriptionValue, setDescriptionValue] = React.useState("");
  const [hastagValue, setHastagValue] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState<String>();

  // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  function handleSave(item: FormProps) {
    return item;
  }

  const handleSubmit = (event: any | FormProps) => {
    event.preventDefault();

    if (selectedOption === "teste") {
      const dadosNovos = handleSave({
        id: Math.random(),
        title: titleValue,
        description: descriptionValue,
        hastag: hastagValue,
        afazer: true,
      });
      fecharForm(false);

      setCard([...card, dadosNovos]);
    }

    if (selectedOption === "fazendo") {
      const dadosNovos = handleSave({
        id: Math.random(),
        title: titleValue,
        description: descriptionValue,
        hastag: hastagValue,
        fazendo: true,
      });
      fecharForm(false);

      setCard([...card, dadosNovos]);
    }

    if (selectedOption === "feito") {
      const dadosNovos = handleSave({
        id: Math.random(),
        title: titleValue,
        description: descriptionValue,
        hastag: hastagValue,
        feito: true,
      });
      fecharForm(false);

      setCard([...card, dadosNovos]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          id="title"
          placeholder="Título"
          value={titleValue}
          onChange={({ target }) => setTitleValue(target.value)}
          autoComplete="off"
          required
        />

        <input
          type="text"
          id="description"
          placeholder="Descrição"
          value={descriptionValue}
          onChange={({ target }) => setDescriptionValue(target.value)}
          autoComplete="off"
          required
        />

        <input
          type="text"
          id="hastag"
          placeholder="Hastag (Não obrigatório)"
          maxLength={20}
          value={hastagValue}
          onChange={({ target }) => setHastagValue(target.value)}
          autoComplete="off"
        />

        <h4>Em qual coluna esse card tem que estar?</h4>

        <section>
         <div>
         <input
            type="radio"
            name="coluna"
            id="afazer"
            value="teste"
            required
            onChange={radioHandler}
          />
          <label htmlFor="afazer">A fazer</label>
         </div>


          <div>
            <input
              type="radio"
              name="coluna"
              id="fazendo"
              value="fazendo"
              onChange={radioHandler}
            />
            <label htmlFor="fazendo">Fazendo</label>
          </div>

          <div>
            <input
              type="radio"
              name="coluna"
              id="feito"
              value="feito"
              onChange={radioHandler}
            />
            <label htmlFor="feito">Feito</label>
          </div>

        </section>

        <button type="submit">Concluir</button>
      </form>
    </div>
  );
};

export default FormCard;
